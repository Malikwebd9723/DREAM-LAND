const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const { body, validationResult } = require("express-validator");
const validateUser = require("../middleware/validateUser");

//ENDPIONT TO FATCH ALL PROPERTIES

router.get("/fetchallproperty", async (req, res) => {
  try {
    const property = await Property.find();
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// END POINT TO FETCH USER SPACIFIC NOTES
router.get("/fetchproperty", validateUser, async (req, res) => {
  try {
    const property = await Property.find({ userId: req.user.id });
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//END POINT TO ADD PROPERTY FOR SPECFIC USER

router.post(
  "/addproperty",
  validateUser,
  [
    body("name").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
    body("area").exists(),
    body("type").exists(),
    body("location"),
    body("tag"),
    body("price").exists(),
    body("phone").exists(),
  ],
  async (req, res) => {
    try {
      const { name, description, area, type, location, tag, price, phone } =
        req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const property = new Property({
        name,
        description,
        area,
        type,
        location,
        tag,
        price,
        phone,
        userId: req.user.id,
      });
      const saveproperty = await property.save();
      res.json(saveproperty);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//ENDPOINT TO UPDATE USER SPECIFIC PROPERTY

router.put("/updateproperty/:id", validateUser, async (req, res) => {
  try {
    const { name, description, area, type, location, tag, price, phone } =
      req.body;
    const UpdatedProperty = {};
    if (name) {
      UpdatedProperty.name = name;
    }
    if (description) {
      UpdatedProperty.description = description;
    }
    if (area) {
      UpdatedProperty.area = area;
    }
    if (type) {
      UpdatedProperty.type = type;
    }
    if (location) {
      UpdatedProperty.location = location;
    }
    if (tag) {
      UpdatedProperty.tag = tag;
    }
    if (price) {
      UpdatedProperty.price = price;
    }
    if (phone) {
      UpdatedProperty.phone = phone;
    }

    let property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Not Found");
    }

    if (property.userId.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    property = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: UpdatedProperty },
      { new: true }
    );
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//END POINT TO DELETE SPECIFIC PROPERTY

router.delete("/deleteproperty/:id", validateUser, async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send("Not Found");
    }

    if (property.userId.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    property = await Property.findByIdAndDelete(req.params.id);
    res.send("Property has been deleted");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

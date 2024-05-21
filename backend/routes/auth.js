const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const validateUser = require("../middleware/validateUser");
// require('dotenv').config()
JWT_SEC = "dreamLandSecret";

router.post(
  "/register",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      const authToken = jwt.sign({ user: { id: user.id } }, JWT_SEC);
      success = true;
      res.json({success, authToken });
    } catch (error) {
      res.status(500).json({success, error: "Internal server error" });
    }
  }
);

//END POINT TO AUTHENTICATE USER

router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success= false
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        success= false
      }
      else{
      const authToken = jwt.sign({ user: { id: user.id } }, JWT_SEC);
      success = true;
      res.json({success, authToken});
      }
    } catch (error) {res.status(500).json({ success, error: "Internal server error" });}
  }
);

//END POINT TO GET USER PROFILE
  router.post("/profile", validateUser, async(req, res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
        
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }
  })

module.exports = router;

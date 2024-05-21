const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  area:{
    type:String,
    require:true
  },
  type: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  tag: {
    type: Array,
  },
  price: {
    type: String,
    require: true,
  },
  phone:{
    type:String,
    require:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("property", PropertySchema);

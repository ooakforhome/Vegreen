const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegularSchema = new Schema({
  category: {type: String},
  dishId: {type: String},
  name: {type: String},
  nameCH: {type: String},
  price: {type: Number},
  description: {type: String},
  spicy: {type: Boolean, default: false},
  garlic: {type: Boolean, default: false},
  nuts: {type: Boolean, default: false}
});

module.exports = mongoose.model("Regular", RegularSchema);

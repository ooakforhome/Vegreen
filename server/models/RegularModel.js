const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegularSchema = new Schema({
  category: {type: String},
  dishId: {type: String},
  name: {type: String},
  nameCH: {type: String},
  price: {type: Number},
  priceL: {type: Number},
  description: {type: String},
  spicy: {type: String},
  garlic: {type: String},
  nuts: {type: String},
  showDish: {type: String, default: "true"}
});

module.exports = mongoose.model("Regular", RegularSchema);

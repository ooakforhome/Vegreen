const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegularSchema = new Schema({
  category: {type: String},
  dishId: {type: String},
  name: {type: String},
  nameCH: {type: String},
  price: {type: Double},
  priceL: {type: Double},
  description: {type: String},
  spicy: {type: String},
  garlic: {type: String},
  nuts: {type: String}
});

module.exports = mongoose.model("Regular", RegularSchema);

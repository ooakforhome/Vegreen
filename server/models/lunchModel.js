import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LunchSchema = new Schema({
  name: {type: String},
  nameCH: {type: String},
  price: {type: Number},
  description: {type: String},
  hot: {type: Boolean, defalut: false},
  garlic: {type: Boolean, default: false},
  nuts: {type: Boolean, default: false}
});

const Lunch = ('lunch', LunchSchema);

module.exports = Lunch;

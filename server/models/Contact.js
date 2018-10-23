const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: 'Email required',
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    require: false
  },
  message: {type: String, require: true},
  date : { type: Date, default: Date.now }
})

module.exports = mongoose.model("Contact", ContactSchema);

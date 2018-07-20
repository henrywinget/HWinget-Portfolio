const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }

});

module.exports = Contact = mongoose.model('contact', ContactSchema);
const express = require('express');
const router = express.Router();

// User Model
const Contact = require('../../models/Contact');

// route get request to api/user
// desc get all users
// access public

router.get('/', (req, res) => {
  Contact.find()
  .sort({ date: -1})
    .then(users => res.json(users));
});

// route post request to api/user
// desc create a user
// access public

router.post('/', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    title: req.body.title,
    message: req.body.message
  });

  newContact.save().then(contact => res.json(contact));
});

// route DELETE request to api/user/:id
// desc Delete a user
// access public

router.delete('/:id', (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => contact.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));
});

module.exports=  router;
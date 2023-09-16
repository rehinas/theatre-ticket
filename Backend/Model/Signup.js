const mongoose = require('mongoose');

const schema = mongoose.Schema({
  usertype: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Sign= mongoose.model('Signin', schema);
module.exports = Sign;

const express = require('express');
const router = express.Router();
const Signup = require('../Model/Signup'); 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/register', async (req, res) => {
    try {
      const { name, email, number, password } = req.body;
      const newUser = new Signup({ name, email, number, password });
  
      await newUser.save();
      res.send('User registered successfully!');
    } catch (err) {
      console.error(err); // Log the error
      res.send('Error occurred while registering the user: ' + err.message); // Send the error message to the client
    }
  });
  

module.exports = router;

  

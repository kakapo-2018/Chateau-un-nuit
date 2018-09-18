//Bring in express from NODE
const express = require('express');

//Get express router
const router = express.Router();

//Post register from route
router.post('/register', register);

//Pick up password from user
function register(req, res) {
  const { username, password } = req.body;
}

module.exports = router;

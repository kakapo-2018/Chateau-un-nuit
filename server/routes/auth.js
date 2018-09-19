//Bring in express from NODE
const express = require('express');

//Get express router
const router = express.Router();

//Get users database
const { userExists, createUser } = require('../db/users');

//Bring in token from token file
const token = require('../auth/token')


//Post register from route
router.post('/register', register, token.issue);

//Pick up password from user
function register(req, res) {
  const { username, password } = req.body;
}

//See if User exists and if not then create User
function register(req, res, next) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' });
      }
      createUser(req.body.username, req.body.password)
      .then(() => next())
        //res.status(201).end()
    });
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

module.exports = router;

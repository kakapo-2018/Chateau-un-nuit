const path = require('path');
const express = require('express');
const rooms = require('./routes/rooms');

//Get express server
const server = express();
//Get a passport
const passport = require('passport');

//Get Authorization routes from client
const authRoutes = require('./routes/auth');

//Initialize passport
server.use(passport.initialize());

//Allow server to use express and json for directory path

server.use(express.json());
server.use(express.static(path.join(__dirname, './public')));

//Allow server to use Authorization routes
server.use('.api/v1/auth', authRoutes);

//Allow server to pickup directory path for home page
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = server;

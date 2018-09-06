const path = require('path')
const express = require('express')
const rooms = require('./routes/rooms')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/home', rooms)
server.use('/v1/*', (req, res) => res.sendStatus(404))

module.exports = server

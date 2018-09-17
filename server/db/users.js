const connection = require('connection')
const {makeHash} = require('../auth/hash')



module.exports = {
    addUser,
    getUser
}


function addUser ({}, db = connection)  {
    const hash = makeHash(password)
    return db('users').insert({username, hash})
}

function getUser (id, db = connection)  {
    return db('users').where({id}.first())
}
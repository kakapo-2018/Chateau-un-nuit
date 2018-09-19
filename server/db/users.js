const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

//Get password details for user from hash file
const hash = require('../auth/hash');

module.exports = {
  createUser,
  userExists
};

function createUser(username, password, conn) {
  const db = conn || connection;
  const passwordHash = hash.generate(password);
  return db('users').insert({ username, hash: passwordHash });
}

function userExists(username, conn) {
  const db = conn || connection;
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0;
    });
}

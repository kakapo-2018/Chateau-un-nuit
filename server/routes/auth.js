const express = require('express')
const jwt = require('express-jwt') 

const token = require('../auth/token') 
const {addUser, getUser} = require('../db/users')


const router = express.Router()

  
router.post('/register', register, token)
router.get('/user', verifyJwt
                ({}) )

function register (req, res, next)    {
    const {username, password } = req.body
    addUser({ username, password })
        .then(([id]) => {
            res.userID = id
            next()
        })
        .catch(({message}) => {
            // Make sure username does not exist already and if it does not then add userName to database.   
            if (message.includes('Login failed: users.username')) {
                return res.status(404).json({ok: false, message: 'Username already exists.'})
            // Return this message if username does not exist and add      
            }
            res.status(500).json({ok: false, message: "Something happened with login, we have to find out why."})
        })        
}


function user (req, res) {
    getUser(req.user.id)
        .then(({username}) => 
            res.json({
               ok: true,
                username
            }))
            .catch(e =>
                res.status(500).json ( {
                ok: false,
                message: 'Error occured while getting user profile.'        
                }))
} 

//Because of error, user can't access
function userError (err, req, res, next) {
    if (err.name === 'error')
        res.status(401).json({ok: false, message: 'Access denied.'})
}   

module.exports = router
const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())


router.get('/', (req,res)=>{
    res.send("hi ya")
})
router.get('/:id', (req,res)=>{
    res.send("welcome to the room")
})

router.put('/:id', (req,res)=>{
    
})


module.exports = router
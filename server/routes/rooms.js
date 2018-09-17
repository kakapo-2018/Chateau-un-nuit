const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())


router.get('/', (req,res)=>{
    db.getAllRooms()
    .then(rooms =>
        res.json(rooms))
})

router.get('/:id', (req,res)=>{
    let id = req.params.id
    db.getRoomFromId(id)
    .then(room =>
        res.json(room))
    
})

router.put('/:id', (req,res)=>{
    let id = req.params.id
    db.updateRoomAv(id) 
})



module.exports = router
const config = require('../../knexfile').development
const db = require('knex')(config)

function getAllRooms(testConn){
    const conn = testConn || db
    return conn('Rooms').select()
}

function getRoomFromId(id, testConn){
    const conn = testConn || db
    return conn('Rooms')
    .where('id',id)
    .first()

}

function updateRoomAv(id, testConn){
    const conn = testConn || db
    return conn('Rooms')
    .where('id', id)
    .update({
        available: false

    })

}

module.exports = {
    getAllRooms,
    getRoomFromId,
    updateRoomAv
}
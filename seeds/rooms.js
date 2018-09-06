exports.seed = (knex, Promise)=> {
  return knex('Rooms').del()
  .then(function () {
    return knex('Rooms').insert([
      {
        id: 1,
        room_name: 'string',
        available: true,
        description: 'string',
        capacity: 2,
        img: 'string of url'
      }
    ])
  })
}
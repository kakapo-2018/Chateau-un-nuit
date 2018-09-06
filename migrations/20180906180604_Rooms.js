
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Rooms', table=> {
    table.increments('id').primary()
    table.string('room_name')
    table.boolean('available')
    table.string('description', 5000)
    table.integer('capacity')
    table.string('img')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('Rooms')
};

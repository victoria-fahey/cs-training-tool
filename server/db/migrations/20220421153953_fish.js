exports.up = function (knex) {
  return knex.schema.createTable('fish', (table) => {
    table.increments('id').primary()
    table.string('family')
    table.text('species')
    table.text('image')
    table.string('sizeRange')
    table.text('morphology')
    table.text('info')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fish')
}

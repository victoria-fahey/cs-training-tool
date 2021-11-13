exports.up = function (knex) {
  return knex.schema.createTable('corals', (table) => {
    table.increments('id').primary()
    table.string('genus')
    table.string('image')
    table.string('lifestyle')
    table.string('growthForm')
    table.string('coralliteWall')
    table.string('info')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('corals')
}

exports.up = function (knex) {
    return knex.schema.createTable('bleach', (table) => {
        table.increments('id').primary()
        table.string('bleach')
        table.text('info')
        table.text('image')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('bleach')
}

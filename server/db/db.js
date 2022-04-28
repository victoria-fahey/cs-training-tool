const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCorals,
  getFish
}

function getCorals(db = connection) {
  return db('corals')
    .select()
}

function getFish(db = connection) {
  return db('fish')
    .select()
}

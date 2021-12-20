const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('DB getCorals', () => {
  test('returns a correct array of coral objects', () => {
    return db.getCorals(testDb)
      .then(corals => {
        expect(corals).toHaveLength(9)
        expect(corals[0]).toHaveProperty('genus')
        expect(corals[0].genus).toBe('Diploastrea')
        expect(corals[0].image).toBe('/images/corals/diploastrea.png')
        return null
      })
  })
})

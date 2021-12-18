import request from 'supertest'

import server from '../../server'
import { getCorals } from '../../db/db'

jest.mock('../db/db')

describe('GET /cs-training', () => {
  it('routes get corals & responds with corals array on getCorals success', () => {
    getCorals.mockImplementation(() => Promise.resolve([
      { id: 1, genus: 'Pocillopora', image: 'images/corals/pocillopora.png', lifestyle: 'branching', coralliteWall: 'Separate walls', info: 'Habitat stuff' },
      { id: 2, genus: 'test coral', image: 'images/corals/testcoral.png', lifestyle: 'test', coralliteWall: 'none', info: 'fake coral' }
    ]))
    return request(server)
      .get('/cs-training')
      .expect(200)
      .then(res => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].genus).toBe('Pocillopora')
        return null
      })
  })
  it('responds with 500 error when getCorals fails', () => {
    getCorals.mockImplementation(() => Promise.reject(new Error('mock DB error')))
    return request(server)
      .get('/cs-training')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('mock DB error')
        return null
      })
  })
})

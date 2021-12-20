import nock from 'nock'
import { getCorals } from '../apiClient'

describe('getCorals', () => {
  const corals = [
    {
      id: 1,
      genus: 'Galaxea',
      image: '/images/corals/galaxea.png',
      lifestyle: 'Colony',
      growthForm: 'Massive',
      coralliteWall: 'separate walls',
      info: 'some facts about galaxea'
    },
    {
      id: 2,
      genus: 'Seriatopora',
      image: '/images/corals/seriatopora.png',
      lifestyle: 'Colony',
      growthForm: 'Branching',
      coralliteWall: 'separate walls',
      info: 'some facts about seriatopora'
    }
  ]

  const scope = nock('http://localhost')
    .get('/cs-training/')
    .reply(200, corals)

  it('returns an array of all corals', () => {
    return getCorals()
      .then(response => {
        scope.done()
        expect(response).toEqual(corals)
        expect(response).toHaveLength(2)
        return null
      })
  })
})

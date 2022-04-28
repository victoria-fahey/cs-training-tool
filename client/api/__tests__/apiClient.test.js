import nock from 'nock'
import { getCorals, getFish } from '../apiClient'

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

describe('getFish', () => {
  const fish = [
    {
      id: 1,
      family: 'Angelfish',
      species: '6 Banded Angelfish',
      image: '/images/fish/6banded_angelfish.jpeg',
      sizeRange: 'up to 45cm',
      morphology: 'Deep laterally compressed body, similar to butterfly fish expcept larger',
      info: 'Corallivore'
    },
    {
      id: 2,
      family: 'Butterflyfish',
      species: '8 Banded Butterflyfish',
      image: '/images/fish/8banded_butterflyfish.jpeg',
      sizeRange: 'max. length 12cm',
      morphology: 'Laterally compressed, disk-shaped body, with a pointed snout. Yellow colouration with 8 black stripes across body',
      info: 'Corallivore. They have small home ranges, some can even be found in the branches of Acropora. Form heterosexual pairs.'
    }
  ]

  const scope = nock('http://localhost')
    .get('/cs-training/fish/')
    .reply(200, fish)

  it('returns an array of all fish', () => {
    return getFish()
      .then(response => {
        scope.done()
        expect(response).toEqual(fish)
        expect(response).toHaveLength(2)
        return null
      })
  })
})

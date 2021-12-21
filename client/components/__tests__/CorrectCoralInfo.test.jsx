import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import CorrectCoralInfo from '../CorrectCoralInfo'

require('@testing-library/jest-dom')

const mockSetState = jest.fn()

jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}))

jest.mock('react-router-dom', () => ({
  useNavigate: () => ({
    navigate: jest.fn()
  })
}))

const filteredCoral = [
  {
    id: 2,
    genus: 'Acropora',
    image: '/images/corals/acropora.png',
    lifestyle: 'Colony',
    growthForm: 'Branching',
    coralliteWall: 'Separate walls - only genus with the presence of a an axial corallite located on the branch tip',
    info: 'Different Acropora species can form plates or long branches (Staghorn coral). Acropora are extremely susceptible to bleaching when stressed and thrive in habitats with less wave action.'
  },
  {
    id: 9,
    genus: 'Platygyra',
    image: '/images/corals/platygyra.png',
    lifestyle: 'Colony',
    growthForm: 'Massive',
    coralliteWall: 'Shared walls - meandering',
    info: 'Commonly known as  brain corals.'
  }
]

describe('<CorrectCoralInfo />', () => {
  beforeEach(() => {
    render(
      <Router>
        <CorrectCoralInfo filteredCoral={filteredCoral} setCorrectCoral={mockSetState} />
      </Router>
    )
  })
  it('renders correct headings', () => {
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(5)
    expect(headings).toHaveTextContent('Acropora')
    screen.debug()
  })
})

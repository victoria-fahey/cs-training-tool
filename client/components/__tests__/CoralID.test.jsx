import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import CoralID from '../CoralID'
import CorrectCoralInfo from '../CorrectCoralInfo'

require('@testing-library/jest-dom')

jest.mock('../CorrectCoralInfo')

CorrectCoralInfo.mockImplementation(() => <div>CorrectCoralInfo</div>)

const filteredCoral = [
  {
    id: 2,
    genus: 'Acropora',
    image: '/images/corals/acropora.png',
    lifestyle: 'Colony',
    growthForm: 'Branching',
    coralliteWall: 'Separate walls - only genus with the presence of a an axial corallite located on the branch tip',
    info: 'Different Acropora species can form plates or long branches (Staghorn coral). Acropora are extremely susceptible to bleaching when stressed and thrive in habitats with less wave action.'
  }
]

const mockSetState = jest.fn()

jest.mock('react', () => ({
  useState: filteredCoral => [filteredCoral, mockSetState]
}))

describe('<CoralID />', () => {
  beforeEach(() => {
    render(
      <Router>
        <CoralID />
      </Router>
    )
  })
  it('renders correct heading', () => {
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('Who am I?')
    screen.debug()
  })
//   it('does not render anything when setCorrectCoral is false', () => {
//     render(
//       <Router>
//         <CoralID />
//       </Router>
//     )
//     const headings = screen.getAllByRole('heading')
//     expect(headings).not.toBeInTheDocument()
//   })
//   it('renders correct coral info when setCorrectCoral is true', () => {
//     render(
//       <Router>
//         <CorrectCoralInfo filteredCoral={filteredCoral} setCorrectCoral={true} />
//       </Router>
//     )
//   })
})

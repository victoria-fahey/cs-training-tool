import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import RadioButtons from '../RadioButtons'

require('@testing-library/jest-dom')

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
    id: 7,
    genus: 'Porites',
    image: '/images/corals/porites.png',
    lifestyle: 'Colony',
    growthForm: 'Massive',
    coralliteWall: 'Separate walls - very small corallites',
    info: 'Porites are one of the most dominant corals on the reef and have a high tolerance to salinity shifts. Porites species come in all shapes from massive, branching and plates.'
  }
]

describe('<RadioButtons />', () => {
  beforeEach(() => {
    render(
      <Router>
        <RadioButtons filteredCoral={filteredCoral[0]} />
      </Router>
    )
  })
  it('10 radio buttons on page', () => {
    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons).toHaveLength(10)
  })
  it('checking radio buttons work properly', () => {
    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[1])
    expect(radioButtons[1]).toBeChecked()
    expect(radioButtons[0]).not.toBeChecked()
    fireEvent.click(radioButtons[0])
    expect(radioButtons[0]).toBeChecked()
    expect(radioButtons[1]).not.toBeChecked()
  })
})

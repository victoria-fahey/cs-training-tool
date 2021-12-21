import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Coral101 from '../Coral101'

require('@testing-library/jest-dom')

describe('<Coral101 />', () => {
  beforeEach(() => {
    render(
      <Router>
        <Coral101 />
      </Router>
    )
  })
  it('renders correct headings', () => {
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(4)
    expect(headings[0]).toHaveTextContent('Coral Identification 101')
    expect(headings[1]).toHaveTextContent('Coral Lifestyles')
    expect(headings[2]).toHaveTextContent('Coral Growth Forms')
    expect(headings[3]).toHaveTextContent('Corallite Walls')
  })
  it('renders START ID button navigates to correct location', () => {
    const button = screen.getByRole('button')
    const link = screen.getByRole('link')
    expect(button).toHaveTextContent('START ID!')
    expect(link).toHaveAttribute('href', '/coral-id/1')
  })
  it('renders images correctly', () => {
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(12)
    expect(images[0]).toHaveClass('info-image')
    expect(images[0].src).toContain('lifestyle_colony.png')
  })
  it('hovering over image displays correct text', () => {
    const colony = screen.getByText('Colony = coral with more than 1 corallite/polyp')
    const massive = screen.getByText('Massive')
    expect(colony).toHaveClass('overlay-text')
    expect(colony).toHaveTextContent('Colony = coral with more than 1 corallite/polyp')
    expect(massive).toHaveClass('overlay-text')
    expect(massive).toHaveTextContent('Massive')
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../Home'

require('@testing-library/jest-dom')

describe('<Home />', () => {
  beforeEach(() => {
    render(<Router><Home /></Router>)
  })
  it('renders correct headings', () => {
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent('Coral Reef Monitoring Training Tool')
    expect(headings[1]).toHaveTextContent('Blurb about coral reefs')
  })
  it('renders correct image', () => {
    const image = screen.getByRole('img')
    expect(image.src).toContain('banner.png')
  })
})

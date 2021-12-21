import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import LastCoralButton from '../LastCoralButton'

require('@testing-library/jest-dom')

describe('<LastCoralButton />', () => {
  beforeEach(() => {
    render(
      <Router>
        <LastCoralButton />
      </Router>
    )
  })
  it('FINISH button links to coral ID landing page', () => {
    const button = screen.getByRole('button')
    const link = screen.getByRole('link')
    expect(button).toHaveTextContent('FINISH')
    expect(link).toHaveAttribute('href', '/coral-id-101')
  })
})

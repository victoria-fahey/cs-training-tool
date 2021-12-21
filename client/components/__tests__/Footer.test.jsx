import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from '../Footer'

require('@testing-library/jest-dom')

describe('<Footer />', () => {
  beforeEach(() => {
    render(
      <Router>
        <Footer />
      </Router>
    )
  })
  it('renders with correct text', () => {
    const text = screen.getByText('© 2021 COREsea. All rights reserved')
    expect(text).toBeInTheDocument()
  })
  it('renders correct social media links', () => {
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks).toHaveLength(3)
    expect(socialLinks[0]).toHaveAttribute('href', 'https://www.facebook.com/CoreSea/')
    expect(socialLinks[1]).toHaveAttribute('href', 'https://www.instagram.com/coresea_official/?hl=en')
    expect(socialLinks[2]).toHaveAttribute('href', 'https://www.youtube.com/c/coresea')
  })
})

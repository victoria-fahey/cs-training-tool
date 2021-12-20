import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../Navbar'

require('@testing-library/jest-dom')

describe('<NavBar />', () => {
  beforeEach(() => {
    render(<Router><Navbar /></Router>)
  })
  it('renders logo correctly', () => {
    const logo = screen.getByRole('img')
    expect(logo.src).toContain('COREsea_logo_white.png')
  })
  it('renders correct links', () => {
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
    expect(links[0]).toHaveTextContent('Home')
    expect(links[1]).toHaveTextContent('Coral ID')
    expect(links[2]).toHaveTextContent('Fish ID')
    expect(links[3]).toHaveTextContent('Bleaching')
    expect(links[4]).toHaveTextContent('COREsea')
  })
  it('navigates to correct location', () => {
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', '/')
    expect(links[1]).toHaveAttribute('href', '/coral-id-101')
    expect(links[2]).toHaveAttribute('href', '/fish-id-101')
    expect(links[3]).toHaveAttribute('href', '/bleaching-101')
    expect(links[4]).toHaveAttribute('href', 'https://coresea.com/')
  })
})

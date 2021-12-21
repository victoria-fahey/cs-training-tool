import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import CoralModal from '../CoralModal'

require('@testing-library/jest-dom')

describe('<CoralModal />', () => {
  beforeEach(() => {
    render(
      <Router>
        <CoralModal />
      </Router>
    )
  })
  it('renders modal button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('ID reminders')
  })
  it('clicked modal should open extra info', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(3)
    expect(list[0]).toHaveTextContent('Growth form?')
    expect(list[2]).toHaveTextContent('Axial corallite?')
  })
})

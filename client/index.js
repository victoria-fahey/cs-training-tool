import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import App from './pages/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('app')
  )
})

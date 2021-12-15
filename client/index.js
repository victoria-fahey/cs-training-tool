import React from 'react'
import { render } from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import App from './pages/App'
import theme from './styles/CustomTheme'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('app')
  )
})

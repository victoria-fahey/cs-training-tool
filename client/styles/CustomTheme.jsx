import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Roboto Condensed',
    body: 'Roboto Condensed'
  },
  colors: {
    brand: {
      blue: '#011e40', // dark blue
      teal: '#3a4a58', // teal
      100: 'white'
    }
  }

})

export default theme

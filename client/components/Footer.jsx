import React from 'react'
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

const SocialButton = ({
  children,
  label,
  href
}) => {
  return (
    <chakra.button
      bg='gray.600'
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

function SimpleFooter () {
  return (
    <Box
      bg='brand.blue'
      color='brand.white'
      borderTopWidth={1}
      borderStyle={'solid'}
      bottom={0}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2021 COREsea. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/CoreSea/'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/coresea_official/?hl=en'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/coresea'}>
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default SimpleFooter

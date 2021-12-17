import React from 'react'
import { Link, Box, Flex, HStack, Image } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <>
      <Box
        bg='brand.blue'
        color='brand.white'
        px={4}>
        <Flex
          h={20}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                src="/images/COREsea_logo_white.png"
                h='80px'
                w='auto' />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontSize='xl'>
              <Link as={RouteLink} to={'/'}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.600'
                }}>Home</Link>
              <Link as={RouteLink} to={'/coral-id-101'}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.600'
                }}>Coral ID</Link>
              <Link as={RouteLink} to={'/fish-id-101'}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.600'
                }}>Fish ID</Link>
              <Link as={RouteLink} to={'/bleaching-101'}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.600'
                }}>Bleaching</Link>
              <Link href="https://coresea.com/" isExternal
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.600'
                }}>COREsea<ExternalLinkIcon mx='3px' />
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar

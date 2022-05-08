import React from 'react'
import { Container, Heading, Text, Link, Button, Box, Image } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

function Bleaching101() {
  return (
    <>
      <Container
        maxW='auto'
        pb={10}
        centerContent>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'
          pb={5}>
          Coral Bleaching 101
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          pb={5}>
          Click button below to test your coral bleaching knowledge
        </Text>
        <Link as={RouteLink} to={'/coral-bleaching/1'}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            opacity: 1
          }}>
          <Button
            bg='brand.blue'
            color='brand.white'
            size='md'>
            START ID!
          </Button>
        </Link>
      </Container>
      <Container maxW='auto' centerContent>
        <Box >
          <Image id='banner' src="/images/bleaching/coral-bleaching.jpg" />
        </Box>
      </Container>
    </>
  )
}

export default Bleaching101

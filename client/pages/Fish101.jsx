import React from 'react'
import { Container, Heading, Text, Link, Button, Box, Image } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

function Fish101 () {
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
          pb={10}>
            Fish Identification 101
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          pb={5}>
            Click button below to get straight into some fish ID
        </Text>
        <Link as={RouteLink} to={'/fish-id/1'}
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
          <Image id='banner' src="/images/fish/fish_diversity.jpeg"/>
        </Box>
      </Container>
    </>
  )
}

export default Fish101

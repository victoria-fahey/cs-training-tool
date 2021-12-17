import React from 'react'
import { Heading, Image, Container, Text, Box } from '@chakra-ui/react'

function Home () {
  return (
    <>
      <Container
        maxW='auto'
        centerContent
        bg='brand.100'>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'>
          Coral Reef Monitoring Training Tool
        </Heading>
        <br/>
        <Box>
          <Image id='banner' src="/images/banner.png" />
        </Box>
        <br/>
        <Heading
          as='h2'
          size='xl'
          color='brand.blue'>
        Blurb about coral reefs
        </Heading>
        <br/>
        <Text
          fontSize='2xl'
          color='brand.teal'>
          Coral reefs are important...
        </Text>
      </Container>
    </>
  )
}

export default Home

import React from 'react'
import { Heading, Image, Container, Text, Box } from '@chakra-ui/react'

function Home () {
  return (
    <>
      <Container
        maxW='auto'
        centerContent>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'>
          Coral Reef Monitoring Training Tool
        </Heading>
        <br/>
        <br/>
        <Box>
          <Image id='banner' src="/images/banner.png" />
        </Box>
        <br/>
        <br/>
        <Heading
          as='h2'
          size='xl'
          color='brand.blue'>
        Coral reefs are{' '}
          <Heading
            as='span' className='gradient'>
            important
          </Heading>
        </Heading>
        <br/>
        <Box
          maxW='70%'
          align='center'>
          <Text
            fontSize='2xl'
            color='brand.teal'>
          Coral Reefs inhabit only 0.1% of the {"ocean's"} surface, paradoxically in nutrient poor waters. Yet they not only thrive, they manage to produce so much energy and shelter that 25% of all marine species find their home here.
          </Text>
          <br/>
          <Text
            fontSize='2xl'
            className='gradient'>
              Coral reefs are stunning, complex, vibrant and they are facing extinction all around the world.
          </Text>
          <br/>
          <Text
            fontSize='2xl'
            color='brand.teal'>
              Threatened by man made dangers, such as climate change, over-fishing, and marine pollution, it is probably only because of their astonishing capability for adaptation that still 25% of them are considered relatively unthreatened.
          </Text>
          <br/>
          <Text
            fontSize='2xl'
            color='brand.teal'>
              But the situation is deteriorating fast, and they will need all the help they can get.
          </Text>
          <br/>
          <Heading
            as='h2'
            size='xl'
            className='hashtag'>
              #NotAllHopeIsGone
          </Heading>
        </Box>
      </Container>
    </>
  )
}

export default Home

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
          pb={10}
          color='brand.blue'>
          Coral Reef Monitoring Training Tool
        </Heading>
        <Box pb={10}>
          <Image id='banner' src="/images/banner.png" />
        </Box>
        <Heading
          as='h2'
          size='xl'
          pb={10}
          color='brand.blue'>
        Coral reefs are{' '}
          <Heading
            as='span' className='gradient'>
            important
          </Heading>
        </Heading>
        <Box
          maxW='70%'
          align='center'>
          <Text
            pb={5}
            fontSize='2xl'
            color='brand.teal'>
          Coral Reefs inhabit only 0.1% of the {"ocean's"} surface, paradoxically in nutrient poor waters. Yet they not only thrive, they manage to produce so much energy and shelter that 25% of all marine species find their home here.
          </Text>
          <Text
            pb={5}
            fontSize='2xl'
            className='gradient'>
              Coral reefs are stunning, complex, vibrant and they are facing extinction all around the world.
          </Text>
          <Text
            pb={5}
            fontSize='2xl'
            color='brand.teal'>
              Threatened by man made dangers, such as climate change, over-fishing, and marine pollution, it is probably only because of their astonishing capability for adaptation that still 25% of them are considered relatively unthreatened.
          </Text>
          <Text
            pb={5}
            fontSize='2xl'
            color='brand.teal'>
              But the situation is deteriorating fast, and they will need all the help they can get.
          </Text>
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

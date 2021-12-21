import React from 'react'
import { Container, Heading, Box } from '@chakra-ui/react'
import { MdBuild } from 'react-icons/md'
import { LoremIpsum } from 'react-lorem-ipsum'

function Fish101 () {
  return (
    <>
      <Container
        maxW='auto'
        centerContent>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'>
          UNDER CONSRUCTION!
        </Heading>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'>
          <MdBuild />
        </Heading>
        <br/>
        <br/>
        {LoremIpsum({ p: 3, random: false }).map((text, index) => (
          <Box key={index}
            fontSize='2xl'
            color='brand.teal'
            maxW='65%'
            align='center'>
            {text}
            <br/>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default Fish101

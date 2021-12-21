import React from 'react'
import { Container, Heading, Box } from '@chakra-ui/react'
import { MdBuild } from 'react-icons/md'
import { LoremIpsum } from 'react-lorem-ipsum'

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
          pb={5}>
        UNDER CONSRUCTION!
        </Heading>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'
          pb={10}>
          <MdBuild />
        </Heading>
        {LoremIpsum({ p: 3, random: false }).map((text, index) => (
          <Box key={index}
            fontSize='2xl'
            color='brand.teal'
            maxW='65%'
            pb={5}
            align='center'>
            {text}
          </Box>
        ))}
      </Container>
    </>
  )
}

export default Fish101

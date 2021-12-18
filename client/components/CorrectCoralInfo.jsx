import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading, Text } from '@chakra-ui/react'

// TODO: handle last coral

function CorrectCoralInfo (props) {
  const { filteredCoral } = props
  const { handleChange } = props
  const { setCorrectCoral } = props
  const navigate = useNavigate()

  function handleClick () {
    navigate(`/coral-id/${filteredCoral[0].id + 1}`)
    handleChange(setCorrectCoral(false))
    // handleLastCoral()
  }

  return (
    <>
      <Container maxW='auto' centerContent>
        <Heading
          as='h1'
          size='3xl'
          color='brand.blue'>
          {filteredCoral[0].genus}
        </Heading>
        <br/>
        <Heading
          as='h5'
          color='brand.blue'>
            Lifestyle
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'>
          {filteredCoral[0].lifestyle}
        </Text>
        <br/>
        <Heading
          as='h5'
          color='brand.blue'>
            Growth Form
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'>
          {filteredCoral[0].growthForm}
        </Text>
        <br/>
        <Heading
          as='h5'
          color='brand.blue'>
            Corallite Walls
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          align='center'>
          {filteredCoral[0].coralliteWall}
        </Text>
        <br/>
        <Heading
          as='h5'
          color='brand.blue'>
            Additional Info
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          align='center'>
          {filteredCoral[0].info}
        </Text>
        <br/>
        <Button
          bg='brand.blue'
          color='brand.white'
          size='md'
          onClick={handleClick}>
          Next Image
        </Button>
      </Container>
    </>
  )
}

export default CorrectCoralInfo

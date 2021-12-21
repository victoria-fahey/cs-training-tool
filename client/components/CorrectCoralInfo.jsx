import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading, Text } from '@chakra-ui/react'

import LastCoralButton from './LastCoralButton'

function CorrectCoralInfo (props) {
  const { filteredCoral } = props
  const { setCorrectCoral } = props
  const navigate = useNavigate()
  const lastCoral = filteredCoral[0].id === 9

  function handleClick () {
    navigate(`/coral-id/${filteredCoral[0].id + 1}`)
    setCorrectCoral(false)
  }

  return (
    <>
      <Container maxW='auto' centerContent>
        <Heading
          as='h1'
          size='3xl'
          color='brand.blue'
          pb={5}>
          {filteredCoral[0].genus}
        </Heading>
        <Heading
          as='h5'
          color='brand.blue'>
            Lifestyle
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          pb={5}>
          {filteredCoral[0].lifestyle}
        </Text>
        <Heading
          as='h5'
          color='brand.blue'>
            Growth Form
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          pb={5}>
          {filteredCoral[0].growthForm}
        </Text>
        <Heading
          as='h5'
          color='brand.blue'>
            Corallite Walls
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          align='center'
          pb={5}>
          {filteredCoral[0].coralliteWall}
        </Text>
        <Heading
          as='h5'
          color='brand.blue'>
            Additional Info
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          align='center'
          pb={5}>
          {filteredCoral[0].info}
        </Text>

        {lastCoral
          ? <LastCoralButton />
          : <Button
            bg='brand.blue'
            color='brand.white'
            size='md'
            onClick={handleClick}>
          Next Image
          </Button>}
      </Container>
    </>
  )
}

export default CorrectCoralInfo

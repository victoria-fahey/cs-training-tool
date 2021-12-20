import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Center, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import { getCorals } from '../api/apiClient'

import CorrectCoralInfo from './CorrectCoralInfo'
import RadioButtons from './RadioButtons'
import CoralModal from './CoralModal'

function CoralID () {
  const [filteredCoral, setFilteredCoral] = useState([{}])
  const { id } = useParams()
  const [correctCoral, setCorrectCoral] = useState(false)

  useEffect(() => {
    getCorals()
      .then(coralData => {
        setFilteredCoral(coralData.filter((coral) => coral.id === Number(id)))
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [id])

  function handleChange (event) {
    if (event.target.value === filteredCoral[0].genus) {
      setCorrectCoral(true)
    } else {
      setCorrectCoral(false)
    }
  }

  return (
    <>
      <Container maxW='auto' centerContent>
        <Heading
          as='h1'
          size='2xl'
          color='brand.blue'>
          Who am I?
        </Heading>
        <br/>
        <Text
          fontSize='2xl'
          color='brand.teal'>
            Choose the correct coral
        </Text>
        <br/>
        <CoralModal />
      </Container>
      <br/>
      <SimpleGrid columns={2} px={10} spacing={10}>
        <Center>
          <Box>
            <Image className='coral-id-image' src={filteredCoral[0].image}/>
          </Box>
        </Center>
        <Center>
          <Box>
            {correctCoral ? <CorrectCoralInfo filteredCoral={filteredCoral} setCorrectCoral={setCorrectCoral}/> : <RadioButtons handleChange={handleChange} correctCoral={correctCoral} /> }
          </Box>
        </Center>
      </SimpleGrid>
    </>
  )
}

export default CoralID

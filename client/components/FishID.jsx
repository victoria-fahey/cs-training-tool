/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Center, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import { getFish } from '../api/apiClient'

import CorrectFishInfo from './CorrectFishInfo'
import FishRadioButtons from './FishRadioButtons'

function FishID() {
    const [filteredFish, setFilteredFish] = useState([{}])
    const { id } = useParams()
    const [correctFish, setCorrectFish] = useState(false)

    useEffect(() => {
        getFish()
            .then(fishData => {
                setFilteredFish(fishData.filter((fish) => fish.id === Number(id)))
                return null
            })
            .catch(err => {
                console.error(err.message)
            })
    }, [id])

    function handleChange(event) {
        if (event.target.value === filteredFish[0].family) {
            setCorrectFish(true)
        } else {
            setCorrectFish(false)
        }
    }

    return (
        <>
            <Container maxW='auto' pb={5} centerContent>
                <Heading
                    as='h1'
                    size='2xl'
                    pb={10}
                    color='brand.blue'>
                    Who am I?
                </Heading>
                <Text
                    fontSize='2xl'
                    color='brand.teal'
                    pb={5}>
                    Choose the fish family
                </Text>
            </Container>

            <SimpleGrid columns={2} px={10} spacing={10}>
                <Center>
                    <Box>
                        <Image className='coral-id-image' src={filteredFish[0].image} />
                    </Box>
                </Center>
                <Center>
                    <Box>
                        {correctFish ? <CorrectFishInfo filteredFish={filteredFish} setCorrectFish={setCorrectFish} /> : <FishRadioButtons handleChange={handleChange} correctFish={correctFish} />}
                    </Box>
                </Center>
            </SimpleGrid>
        </>
    )
}

export default FishID

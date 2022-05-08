/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Center, Container, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react'

import { getBleach } from '../api/apiClient'

import CorrectBleachInfo from './CorrectBleachInfo'
import BleachRadioButtons from './BleachRadioButtons'

function BleachID() {
    const [filteredBleach, setFilteredBleach] = useState([{}])
    const { id } = useParams()
    const [correctBleach, setCorrectBleach] = useState(false)

    useEffect(() => {
        getBleach()
            .then(bleachData => {
                setFilteredBleach(bleachData.filter((bleach) => bleach.id === Number(id)))
                return null
            })
            .catch(err => {
                console.error(err.message)
            })
    }, [id])

    function handleChange(event) {
        if (event.target.value === filteredBleach[0].bleach) {
            setCorrectBleach(true)
        } else {
            setCorrectBleach(false)
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
                    Am I bleached?
                </Heading>
                <Text
                    fontSize='2xl'
                    color='brand.teal'
                    pb={5}>
                    Choose the correct growth form and bleaching status
                </Text>
            </Container>

            <SimpleGrid columns={2} px={10} spacing={10}>
                <Center>
                    <Box>
                        <Image className='bleach-id-image' src={filteredBleach[0].image} />
                    </Box>
                </Center>
                <Center>
                    <Box>
                        {correctBleach ? <CorrectBleachInfo filteredBleach={filteredBleach} setCorrectBleach={setCorrectBleach} /> : <BleachRadioButtons handleChange={handleChange} correctBleach={correctBleach} />}
                    </Box>
                </Center>
            </SimpleGrid>
        </>
    )
}

export default BleachID

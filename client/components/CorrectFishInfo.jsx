import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading, Text } from '@chakra-ui/react'

import LastFishButton from './LastFishButton'

function CorrecFishInfo(props) {
    const { filteredFish } = props
    const { setCorrectFish } = props
    const navigate = useNavigate()
    const lastFish = filteredFish[0].id === 44

    function handleClick() {
        navigate(`/fish-id/${filteredFish[0].id + 1}`)
        setCorrectFish(false)
    }

    return (
        <>
            <Container maxW='auto' centerContent>
                <Heading
                    as='h1'
                    size='3xl'
                    color='brand.blue'
                    pb={5}>
                    {filteredFish[0].family}
                </Heading>

                <Heading
                    as='h5'
                    color='brand.blue'>
                    Species
                </Heading>
                <Text
                    fontSize='2xl'
                    color='Background.teal'
                    pb={5}>
                    {filteredFish[0].species}
                </Text>

                <Heading
                    as='h5'
                    color='brand.blue'>
                    Size Range
                </Heading>
                <Text
                    fontSize='2xl'
                    color='Background.teal'
                    pb={5}>
                    {filteredFish[0].sizeRange}
                </Text>

                <Heading
                    as='h5'
                    color='brand.blue'>
                    Morphology
                </Heading>
                <Text
                    fontSize='2xl'
                    color='Background.teal'
                    pb={5}>
                    {filteredFish[0].morphology}
                </Text>

                <Heading
                    as='h5'
                    color='brand.blue'>
                    Additional Info
                </Heading>
                <Text
                    fontSize='2xl'
                    color='Background.teal'
                    pb={5}>
                    {filteredFish[0].info}
                </Text>

                {lastFish
                    ? <LastFishButton />
                    : <Button
                        bg='brand.blue'
                        color='brand.white'
                        size='md'
                        onClick={handleClick}>
                        Next Image</Button>}
            </Container>
        </>
    )
}

export default CorrecFishInfo

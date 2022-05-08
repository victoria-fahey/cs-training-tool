import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Heading, Text } from '@chakra-ui/react'

import LastBleachButton from './LastBleachButton'

function CorrectBleachInfo(props) {
    const { filteredBleach } = props
    const { setCorrectBleach } = props
    const navigate = useNavigate()
    const lastBleach = filteredBleach[0].id === 21

    function handleClick() {
        navigate(`/coral-bleaching/${filteredBleach[0].id + 1}`)
        setCorrectBleach(false)
    }

    return (
        <>
            <Container maxW='auto' centerContent>
                <Heading
                    as='h1'
                    size='3xl'
                    color='brand.blue'
                    pb={5}>
                    {filteredBleach[0].bleach}
                </Heading>

                <Text
                    fontSize='2xl'
                    color='brand.teal'
                    pb={5}>
                    {filteredBleach[0].info}
                </Text>

                {lastBleach
                    ? <LastBleachButton />
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

export default CorrectBleachInfo

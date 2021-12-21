import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Container, Heading, Link, Button, Text } from '@chakra-ui/react'

function Coral101 () {
  return (
    <>
      <Container maxW='auto' pb={10} centerContent>
        <Heading
          as='h1'
          size='2xl'
          pb={10}
          color='brand.blue'>
          Coral Identification 101
        </Heading>
        <Text
          fontSize='2xl'
          color='brand.teal'
          pb={5}>
            Hover over an image for basic coral anatomy to help you identify coral
        </Text>
        <Link as={RouteLink} to={'/coral-id/1'}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            opacity: 1
          }}>
          <Button
            bg='brand.blue'
            color='brand.white'
            size='md'>
            START ID!
          </Button>
        </Link>
      </Container>
      <Container maxW='auto' centerContent>
        <div className='flex-container'>
          <div className='flex-child'>
            <Heading
              as='h3'
              color='brand.blue'>
            Coral Lifestyles
            </Heading>
            <div className='container'>
              <img className='info-image' src='/images/lifestyle_colony.png'/>
              <div className='overlay-text content'>Colony = coral with more than 1 corallite/polyp</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/lifestyle_solitary.png'/>
              <div className='overlay-text content'>Solitary = coral that lives their entire life as a single polyp</div>
            </div>
          </div>

          <div className='flex-child'>
            <Heading
              as='h3'
              color='brand.blue'>
            Coral Growth Forms
            </Heading>
            <div className='container'>
              <img className='info-image' src='/images/growth-form_massive.png'/>
              <div className='overlay-text content'>Massive</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/growth-form_branching.png'/>
              <div className='overlay-text content'>Branching</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/growth-form_plate.png'/>
              <div className='overlay-text content'>Plate-like</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/growth-form_solitary.png'/>
              <div className='overlay-text content'>Solitary</div>
            </div>
          </div>

          <div className='flex-child'>
            <Heading
              as='h3'
              color='brand.blue'>
            Corallite Walls
            </Heading>
            <div className='container'>
              <img className='info-image' src='/images/corallite_separate.png'/>
              <div className='overlay-text content'>Separate walls</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/corallite_shared.png'/>
              <div className='overlay-text content'>Shared walls</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/corallite_nowalls.png'/>
              <div className='overlay-text content'>No walls</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/corallite_meandering.png'/>
              <div className='overlay-text content'>Meandering</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/corallite_axial.png'/>
              <div className='overlay-text content'>Axial corallite = found at branch tip</div>
            </div>
            <div className='container'>
              <img className='info-image' src='/images/corallite_radial.png'/>
              <div className='overlay-text content'>Radial corallite = located on length of branches</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Coral101

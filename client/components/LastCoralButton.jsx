import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Button, Link } from '@chakra-ui/react'

function LastCoralButton () {
  return (
    <Link as={RouteLink} to={'/coral-id-101'}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        opacity: 1
      }}>
      <Button
        bg='brand.blue'
        color='brand.white'
        size='md'>
      FINISH!
      </Button>
    </Link>
  )
}

export default LastCoralButton

import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ListItem, UnorderedList, useDisclosure } from '@chakra-ui/react'

function CoralModal () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        bg='brand.blue'
        color='brand.white'
        size='md'>
          ID reminders
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader
            fontSize='xl'
            color='brand.blue'>
            <u>ID reminders</u>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <UnorderedList
              fontSize='large'
              color='brand.teal'>
              <ListItem>Growth form?</ListItem>
              <ListItem>Are the walls shared separate, meandering or have no walls?</ListItem>
              <ListItem>Axial corallite?</ListItem>
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CoralModal

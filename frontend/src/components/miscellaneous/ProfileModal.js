import {IconButton} from "@chakra-ui/button";
import {useDisclosure} from "@chakra-ui/hooks";
import {ViewIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/button"
import {Image} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout"
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import React from 'react'

const ProfileModal = ({user,children}) => {
  const {isOpen,onOpen,onClose}=useDisclosure();

  return (
    <>
     {children?(
        <span onClick={onOpen}>{children}</span>
     ):(
        <IconButton d={{base:"flex"}} icon={<ViewIcon />} onClick={onOpen}/>
     )} 

        <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent height="410px">
          <ModalHeader
          fontSize="25px"
          fontFamily="Work sans"
          display="flex"
          justifyContent="center"
          >{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column"
          alignItems="center" justifyContent="space-between">
            <Image 
            borderRadius="full"
            boxSize="150px"
            src={user.pic}
            alt={user.name}/>

            <Text fontSize={{base:"16px",md:"20px"}} fontFamily="Work sans">
                Email:{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  )
}

export default ProfileModal

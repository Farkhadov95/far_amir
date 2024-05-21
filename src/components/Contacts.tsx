import {
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  HStack,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin, BsFacebook, BsTelegram, BsGithub } from "react-icons/bs";

const Contacts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant={"outline"} colorScheme="real">
        Contacts
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contacts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Heading fontSize="sm">Email:</Heading>
              <Text>farkhadov950405@gmail.com</Text>
            </HStack>
            <Box display="flex" gap={2} marginTop={2}>
              <Link href="https://www.linkedin.com/in/amir-farkhadov-513601222/">
                <BsLinkedin fontSize={"24px"} />
              </Link>
              <Link href="https://www.facebook.com/amir.farkhadov">
                <BsFacebook fontSize={"24px"} />
              </Link>
              <Link href="https://t.me/far_amir">
                <BsTelegram fontSize={"24px"} />
              </Link>
              <Link href="https://github.com/Farkhadov95">
                <BsGithub fontSize={"24px"} />
              </Link>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Contacts;

import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Icon,
  VStack,
  Link as ChakraLink,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

const DrawerNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        color="brand.900"
        onClick={onOpen}
        width="50px"
        borderRadius="0"
      >
        <Icon as={MdMenu} boxSize={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box display="flex" gap={2} alignItems="center">
              <BsFillCircleFill fill="teal" />
              <ChakraLink as={RouterLink} to="/" onClick={onClose}>
                <Heading fontSize="lg">Amir Farkhadov</Heading>
              </ChakraLink>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack justifyContent="center" spacing={4} padding={4}>
              <ChakraLink as={RouterLink} to="resume" onClick={onClose}>
                Resume
              </ChakraLink>
              <ChakraLink as={RouterLink} to="projects" onClick={onClose}>
                Projects
              </ChakraLink>
              <ChakraLink as={RouterLink} to="contact" onClick={onClose}>
                Contact
              </ChakraLink>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Отмена
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;

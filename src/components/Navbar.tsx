import {
  Box,
  Divider,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" gap={2} alignItems="center">
        <BsFillCircleFill fill="teal" />
        <ChakraLink as={RouterLink} to="/">
          <Heading fontSize="lg">Amir Farkhadov</Heading>
        </ChakraLink>
        <Text fontSize="sm">Frontend Developer</Text>
      </Box>
      <Box display="flex" gap={2}>
        <ChakraLink as={RouterLink} to="/resume">
          Resume
        </ChakraLink>
        <Divider orientation="vertical" />
        <ChakraLink as={RouterLink} to="/projects">
          Projects
        </ChakraLink>
        <Divider orientation="vertical" />
        <ChakraLink as={RouterLink} to="/contact">
          Contact
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default Navbar;

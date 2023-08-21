import {
  Box,
  Divider,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import ColorModeSwitch from "./ColorModeSwitch";
import SettingModal from "./SettingModal";

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
      <Box display="flex" gap={2} alignItems="center">
        <ChakraLink as={RouterLink} to="/resume">
          Resume
        </ChakraLink>
        <Divider orientation="vertical" />
        <ChakraLink as={RouterLink} to="/projects">
          Projects
        </ChakraLink>
        <Divider orientation="vertical" />
        <ChakraLink as={RouterLink} to="/about">
          About
        </ChakraLink>
        <Divider orientation="vertical" />
        <SettingModal />
      </Box>
    </Box>
  );
};

export default Navbar;

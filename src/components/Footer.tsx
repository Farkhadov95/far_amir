import { Box, Heading, Text } from "@chakra-ui/react";
import { BsLinkedin, BsFacebook, BsTelegram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      gap={{ base: 3, md: 0 }}
      marginY={5}
    >
      <Box>
        <Heading fontSize="sm">Email</Heading>
        <Text>Farkhadov950405@mail.com</Text>
      </Box>
      <Box>
        <Heading fontSize="sm">Follow Me</Heading>
        <Box display="flex" width="100%" gap={2} marginTop={1}>
          <BsLinkedin />
          <BsFacebook />
          <BsTelegram />
        </Box>
      </Box>
      <Box>
        <Box display="flex" gap={1} alignItems="center">
          <BiCopyright />
          <Heading fontSize="sm">2023 by Amir Farkhadov.</Heading>
        </Box>
        <Text>GitHub link</Text>
      </Box>
    </Box>
  );
};

export default Footer;

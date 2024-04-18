import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsLinkedin, BsFacebook, BsTelegram, BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <VStack justifyContent="space-between">
      <Divider orientation="horizontal" />
      <HStack
        marginTop={5}
        width={"100%"}
        justifyContent={"space-between"}
        gap={{ base: 3, md: 0 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Heading fontSize="sm">Email</Heading>
          <Text>Farkhadov950405@mail.com</Text>
        </Box>
        <Box>
          <Heading fontSize="sm">Social Media</Heading>
          <Box display="flex" width="100%" gap={2} marginTop={1}>
            <Link href="https://www.linkedin.com/in/amir-farkhadov-513601222/">
              <BsLinkedin />
            </Link>
            <Link href="https://www.facebook.com/amir.farkhadov">
              <BsFacebook />
            </Link>
            <Link href="https://t.me/far_amir">
              <BsTelegram />
            </Link>
            <Link href="https://github.com/Farkhadov95">
              <BsGithub />
            </Link>
          </Box>
        </Box>
        <Box>
          <Box display="flex" gap={1} alignItems="center">
            <BiCopyright />
            <Heading fontSize="sm">2023 by Amir Farkhadov.</Heading>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Footer;

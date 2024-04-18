import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  SimpleGrid,
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
        marginTop={{ base: 2, md: 5 }}
        justify={"space-between"}
        width={"100%"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <HStack>
          <Heading fontSize="sm">Email:</Heading>
          <Text>Farkhadov950405@mail.com</Text>
        </HStack>
        <HStack>
          <Heading fontSize="sm">Social Media:</Heading>
          <Box display="flex" gap={2} marginTop={1}>
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
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Footer;

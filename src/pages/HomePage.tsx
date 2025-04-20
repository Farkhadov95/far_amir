import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import picture from "/DSC_35817.webp";
import dev from "../assets/dev.json";
import "../assets/svg/home-bottom.css";
import { TealFooter } from "../components/bottomColors/TealFooter";

const HomePage = () => {
  return (
    <VStack
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      paddingBottom={{ base: "100px", sm: "120px", md: "150px" }}
      alignItems="center"
      gap={10}
      justifyContent="center"
      flexGrow={1}
      height={"100vh"}
      position={"relative"}
    >
      <Box
        order={{ base: 1, md: 0 }}
        borderRadius="50%"
        width={{ base: "80vw", md: "45vw", lg: "35vw", xl: "30vw" }}
        border="2px solid black"
        marginBottom={{ base: 5, md: 0 }}
      >
        <Image src={picture} borderRadius="50%" width="100%" height="100%" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={{ base: "80vw", md: "45vw", lg: "35vw", xl: "30vw" }}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" width="100%" mt={5}>
          <Heading fontSize={{ base: "6xl", md: "6xl", lg: "8xl" }}>
            Hello
          </Heading>
          <Box width="50%">
            <Lottie animationData={dev} />
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl">My name is Amir Farkhadov.</Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            marginTop={2}
            marginBottom={{ base: 5, md: 10 }}
            textAlign="justify"
          >
            I am a Front-end Developer. I have a strong passion for creating
            dynamic and user-friendly websites. My experience in HTML, CSS,
            JavaScript, TypeScript, and React has enabled me to develop
            responsive and visually appealing web applications. I prioritize
            intuitive user interfaces and strive to deliver high-quality code
            with optimal functionality.
          </Text>
        </Box>
        <Box display="flex" gap={2} justifyContent="center">
          <Button
            as={Link}
            to={`projects`}
            smooth={true}
            duration={500}
            width={{ base: "80px", sm: "100px" }}
            height={{ base: "80px", sm: "100px" }}
            borderRadius={"50%"}
            color={"white"}
            bgColor={"#006494"}
            _hover={{ bgColor: "#0582CA" }}
          >
            Projects
          </Button>
          <Button
            as={Link}
            to={"resume"}
            smooth={true}
            duration={500}
            width={{ base: "80px", sm: "100px" }}
            height={{ base: "80px", sm: "100px" }}
            borderRadius={"50%"}
            color={"white"}
            bgColor={"#219EBC"}
            _hover={{ bgColor: "#25B9D0" }}
          >
            Resume
          </Button>
          <Button
            as={Link}
            to={"about"}
            smooth={true}
            duration={500}
            width={{ base: "80px", sm: "100px" }}
            height={{ base: "80px", sm: "100px" }}
            borderRadius={"50%"}
            color={"white"}
            bgColor={"#5E60CE"}
            _hover={{ bgColor: "#8284D9" }}
          >
            About
          </Button>
        </Box>
      </Box>
      <TealFooter />
    </VStack>
  );
};

export default HomePage;

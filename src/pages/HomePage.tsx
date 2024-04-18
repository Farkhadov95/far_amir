import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import picture from "/DSC_35817.webp";
import dev from "../assets/dev.json";
import HomeDots from "../components/HomeDots";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      alignItems="center"
      gap={10}
      justifyContent="center"
      marginY={{ sm: "10vh", md: "20vh" }}
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
          <HomeDots title="Projects" color="red" />
          <HomeDots title="Resume" color="teal" />
          <HomeDots title="About" color="orange" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

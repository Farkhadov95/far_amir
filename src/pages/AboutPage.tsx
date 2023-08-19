import { Box, Heading } from "@chakra-ui/react";
import Lottie from "lottie-react";
import about from "../assets/about.json";

const AboutPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          About
        </Heading>
        <Box width="25%">
          <Lottie animationData={about} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;

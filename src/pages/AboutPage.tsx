import { Box, Heading, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import about from "../assets/about.json";

const AboutPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          About
        </Heading>
        <Box width={{ base: "25%", xl: "15%" }}>
          <Lottie animationData={about} />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="xl" paddingY={3}>
          My journey
        </Heading>
        <Text textAlign="justify" paddingBottom={2}>
          I am a passionate and dedicated Front-end Developer with a strong
          foundation in crafting responsive web applications using a suite of
          modern tools and technologies, including HTML, CSS, JavaScript, and
          React. Holding a Master's degree in Computer Science, my academic the
          background is further bolstered by a range of specialized developer
          courses.
        </Text>
        <Text textAlign="justify">
          Over the years, I have worked on various projects, and I always tried
          to deliver web applications that not only adhere to specified
          requirements, but are also completed within stipulated deadlines.
          Beyond the web, I possess expertise in developing Android applications
          utilizing Kotlin, Java, and RoomDB. My skill set extends to Machine
          Learning where I have experience designing models with Python and
          associated libraries.
        </Text>
      </Box>
      <Box>
        <Heading fontSize="xl" paddingY={3}>
          Hobbies
        </Heading>
        <Text paddingBottom={2} textAlign="justify">
          I am a huge movie fan who thoroughly enjoys watching blockbuster films
          on the largest possible screen. Whether it's the latest Top Gun or the
          upcoming The Flash, spending an evening immersed in these cinematic
          experiences is truly exhilarating.
        </Text>
        <Text paddingBottom={2} textAlign="justify">
          In addition to movies, I find great pleasure in reading books,
          particularly within the genres of Fiction, Sci-Fi, and Classics. Some
          of my favorites include Ready Player One, The Count of Monte Cristo,
          and Anna Karenina, among others.
        </Text>
        <Text paddingBottom={2}>
          Being passionate about the tech world, I am also a fan of gaming. It
          not only provides entertainment but also serves as a platform for
          exploring and testing modern technologies such as ray-tracing, frame
          generation, and various software and hardware advancements.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutPage;

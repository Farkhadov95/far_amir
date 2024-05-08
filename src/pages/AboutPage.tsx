import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Lottie from "lottie-react";
import about from "../assets/about.json";

const AboutPage = () => {
  return (
    <VStack
      flexGrow={1}
      paddingX={"10vw"}
      paddingBottom={"5vh"}
      bgColor={"#9B5DE5"}
      color={"white"}
      id="about"
    >
      <Box display="flex" alignItems="center" width="100%" paddingY={"2rem"}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          About
        </Heading>
      </Box>
      <VStack gap={5}>
        <Box>
          <Heading fontSize="xl" paddingY={3}>
            My journey
          </Heading>
          <Text textAlign="justify" paddingBottom={2}>
            I am a passionate and dedicated Front-end Developer with a strong
            foundation in crafting responsive web applications using a suite of
            modern tools and technologies, including HTML, CSS, JavaScript,
            TypeScript, and React. Holding a Master's degree in Computer
            Science, my academic the background is further bolstered by a range
            of specialized developer courses.
          </Text>
          <Text textAlign="justify">
            Over the years, I have worked on various projects, and I always
            tried to deliver web applications that not only adhere to specified
            requirements, but are also completed within stipulated deadlines.
            Beyond the web, I possess expertise in developing Android
            applications utilizing Kotlin, Java, and RoomDB. My skill set
            extends to Machine Learning where I have experience designing models
            with Python and associated libraries.
          </Text>
        </Box>
        <Box>
          <Heading fontSize="xl" paddingY={3}>
            Hobbies
          </Heading>
          <Text paddingBottom={2} textAlign="justify">
            I am a huge movie fan who thoroughly enjoys watching blockbuster
            films on the largest possible screen. Whether it's the latest Top
            Gun or the upcoming The Flash, spending an evening immersed in these
            cinematic experiences is truly exhilarating.
          </Text>
          <Text paddingBottom={2} textAlign="justify">
            In addition to movies, I find great pleasure in reading books,
            particularly within the genres of Fiction, Sci-Fi, and Classics.
            Some of my favorites include Ready Player One, The Count of Monte
            Cristo, and Anna Karenina, among others.
          </Text>
          <Text paddingBottom={2}>
            Being passionate about the tech world, I am also a fan of gaming. It
            not only provides entertainment but also serves as a platform for
            exploring and testing modern technologies such as ray-tracing, frame
            generation, and various software and hardware advancements.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default AboutPage;

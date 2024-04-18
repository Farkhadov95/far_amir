import { Heading, Box, Divider, Button, Link, Icon } from "@chakra-ui/react";
import { RxDownload } from "react-icons/rx";
import ResumeSkills from "../components/Resume/ResumeSkills";
import Lottie from "lottie-react";
import book from "../assets/bookForDark.json";
import cv from "/Amir Farkhadov's CV.pdf";
import ResumeSection from "../components/Resume/ResumeSection";
import { courses, education, work } from "../data/courses";

const ResumePage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" width="100%">
          <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
            Resume
          </Heading>
          <Box width={{ base: "25%", xl: "15%" }}>
            <Lottie animationData={book} />
          </Box>
        </Box>
        <Button
          colorScheme="teal"
          variant={"outline"}
          as={Link}
          href={cv}
          download={true}
        >
          <Icon as={RxDownload} size="1em" />
        </Button>
      </Box>
      <ResumeSkills />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeSection title="Work Experience" items={work} />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeSection title="Education" items={education} />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeSection title="Courses" items={courses} />
    </Box>
  );
};

export default ResumePage;

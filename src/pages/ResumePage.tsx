import { Heading, Box, Divider, Button, Link, Text } from "@chakra-ui/react";
import { RxDownload } from "react-icons/rx";
import ResumeSkills from "../components/Resume/ResumeSkills";
import ResumeEducation from "../components/Resume/ResumeEducation";
import ResumeCourses from "../components/Resume/ResumeCourses";
import Lottie from "lottie-react";
import book from "../assets/bookForDark.json";
import cv from "/Amir Farkhadov's CV.pdf";

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
        <Button as={Link} href={cv} download={true}>
          <RxDownload size="1.5em" />
          <Text fontSize={{ base: "xs", md: "md" }} ml={1}>
            Download
          </Text>
        </Button>
      </Box>
      <ResumeSkills />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeEducation />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeCourses />
    </Box>
  );
};

export default ResumePage;

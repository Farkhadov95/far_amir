import { Heading, Box, Divider } from "@chakra-ui/react";

import ResumeSkills from "../components/Resume/ResumeSkills";
import ResumeEducation from "../components/Resume/ResumeEducation";
import ResumeCourses from "../components/Resume/ResumeCourses";
import Lottie from "lottie-react";
import book from "../assets/bookForDark.json";

const ResumePage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Resume
        </Heading>
        <Box width="25%">
          <Lottie animationData={book} />
        </Box>
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

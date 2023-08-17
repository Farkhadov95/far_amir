import { Heading, Box, Divider } from "@chakra-ui/react";

import ResumeSkills from "../components/ResumeSkills";
import ResumeEducation from "../components/ResumeEducation";
import ResumeCourses from "../components/ResumeCourses";

const ResumePage = () => {
  return (
    <Box padding="10vh" paddingBottom="5vh">
      <Heading as="h1" size="xl" marginBottom={5}>
        Resume
      </Heading>
      <ResumeSkills />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeEducation />
      <Divider orientation="horizontal" marginBottom={5} />
      <ResumeCourses />
    </Box>
  );
};

export default ResumePage;

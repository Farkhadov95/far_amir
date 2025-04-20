import { Heading, Box, Divider } from "@chakra-ui/react";
import ResumeSkills from "../components/Resume/ResumeSkills";
import ResumeSection from "../components/Resume/ResumeSection";
import { courses, education, work } from "../data/courses";
import "../assets/svg/resume-bottom.css";
import { PurpleFooter } from "../components/bottomColors/PurpleFooter";
import { BlueFooter } from "../components/bottomColors/BlueFooter";

const ResumePage = () => {
  return (
    <Box
      paddingX={{ base: "20px", sm: "20px", md: "50px" }}
      paddingTop={{ base: "20px", sm: "20px", md: "50px" }}
      paddingBottom={{ base: "50px", sm: "100px", md: "120px" }}
      bgColor={"#219EBC"}
      position={"relative"}
      color={"white"}
      id={"resume"}
    >
      <Box width={{ base: "100%", md: "80%", xl: "60%" }} margin="0 auto">
        <Box display="flex" alignItems="center" width="100%" paddingY={"2rem"}>
          <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
            Resume
          </Heading>
        </Box>
        <ResumeSkills />
        <Divider orientation="horizontal" marginBottom={5} />
        <ResumeSection title="Work Experience" items={work} />
        <Divider orientation="horizontal" marginBottom={5} />
        <ResumeSection title="Education" items={education} />
        <Divider orientation="horizontal" marginBottom={5} />
        <ResumeSection title="Courses" items={courses} />
      </Box>
      <BlueFooter />
    </Box>
  );
};

export default ResumePage;

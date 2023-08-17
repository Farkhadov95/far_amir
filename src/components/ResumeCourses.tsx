import { Heading, Box } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";

const ResumeCourses = () => {
  return (
    <Box display="flex" justifyContent="space-between" paddingTop={5}>
      <Box>
        <Heading as="h2" size="md">
          Courses
        </Heading>
      </Box>
      <Box>
        <ResumeItem
          date="February - May 2023"
          title="HTML Academy"
          description="React. Development of Complex Front-end Applications."
        />
        <ResumeItem
          date="December - February 2023"
          title="HTML Academy"
          description="JavaScript. Architecture of Front-end Applications"
        />
        <ResumeItem
          date="May - September 2020"
          title="HTML Academy"
          description="JavaScript. Professional Development of Web Interfaces"
        />
        <ResumeItem
          date="March - May 2020"
          title="HTML Academy"
          description="Professional HTML & CSS, Level 2"
        />
        <ResumeItem
          date="May - August 2020"
          title="Udacity"
          description="Front-end Web Developer. One Million Uzbek Coders"
        />
        <ResumeItem
          date="September - December 2019"
          title="Udacity"
          description="Full Stack Web Developer. One Million Uzbek Coders"
        />
      </Box>
    </Box>
  );
};

export default ResumeCourses;

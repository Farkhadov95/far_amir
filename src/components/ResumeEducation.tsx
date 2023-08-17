import { Heading, Box, Divider } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";

const ResumeEducation = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingBottom={5}
      paddingTop={10}
    >
      <Box>
        <Heading as="h2" size="md">
          Education
        </Heading>
      </Box>
      <Box>
        <ResumeItem
          date="2021-2022"
          title="University of Greenwich"
          description="MSc Computer Science"
        />
        <ResumeItem
          date="2014-2018"
          title="Bangor University"
          description="BSc Industrial Management"
        />
      </Box>
    </Box>
  );
};

export default ResumeEducation;

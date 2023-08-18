import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const ProjectsPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }} paddingBottom="5vh">
      <Heading as="h1" size="xl" marginBottom={{ base: 2, md: 5 }}>
        Projects
      </Heading>
    </Box>
  );
};

export default ProjectsPage;

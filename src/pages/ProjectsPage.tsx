import { Box, Divider, Heading } from "@chakra-ui/react";
import ProjectsItem from "../components/ProjectsItem";
import Lottie from "lottie-react";
import projects from "../assets/projects.json";
import projectsItems from "../data/projects";

const ProjectsPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Projects
        </Heading>
        <Box width={{ base: "25%", xl: "15%" }}>
          <Lottie animationData={projects} />
        </Box>
      </Box>

      {projectsItems.map((project, index) => (
        <Box key={project.id}>
          <ProjectsItem project={project} />
          {index !== projectsItems.length - 1 && (
            <Divider orientation="horizontal" />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsPage;

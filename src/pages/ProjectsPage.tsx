import {
  Box,
  Divider,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ProjectsItem from "../components/ProjectsItem";
import Lottie from "lottie-react";
import projectsAni from "../assets/projects.json";
import { projects, eduProjects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Projects
        </Heading>
        <Box width={{ base: "25%", xl: "15%" }}>
          <Lottie animationData={projectsAni} />
        </Box>
      </Box>

      <Tabs isFitted variant="enclosed" colorScheme="green">
        <TabList mb="1em">
          <Tab>Personal</Tab>
          <Tab>Practice</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {projects.map((project, index) => (
              <Box key={project.id}>
                <ProjectsItem project={project} />
                {index !== projects.length - 1 && (
                  <Divider orientation="horizontal" />
                )}
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            {eduProjects.map((project, index) => (
              <Box key={project.id}>
                <ProjectsItem project={project} />
                {index !== eduProjects.length - 1 && (
                  <Divider orientation="horizontal" />
                )}
              </Box>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProjectsPage;

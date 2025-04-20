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
import { projects, eduProjects } from "../data/projects";
import "../assets/svg/projects-bottom.css";
import { TealFooter } from "../components/bottomColors/TealFooter";
import { PurpleFooter } from "../components/bottomColors/PurpleFooter";

const ProjectsPage = () => {
  return (
    <Box
      paddingX={{ base: "20px", sm: "20px" }}
      paddingTop={{ base: "20px", sm: "20px" }}
      paddingBottom={"125px"}
      position={"relative"}
      bgColor={"#006494"}
      color={"white"}
      id="projects"
    >
      <Box width={{ base: "100%", md: "80%", xl: "60%" }} margin="0 auto">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl" }}
          paddingY={"2rem"}
        >
          Projects
        </Heading>

        <Tabs isFitted variant="soft-rounded" colorScheme="blue">
          <TabList mb="2rem" border={"1px solid"} borderRadius={"50px"}>
            <Tab color={"white"}>Personal</Tab>
            <Tab color={"white"}>Practice</Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>
              {projects.map((project, index) => (
                <Box key={project.id}>
                  <ProjectsItem project={project} />
                  {index !== projects.length - 1 && (
                    <Divider orientation="horizontal" mb={{ base: 5 }} />
                  )}
                </Box>
              ))}
            </TabPanel>
            <TabPanel padding={0}>
              {eduProjects.map((project, index) => (
                <Box key={project.id}>
                  <ProjectsItem project={project} />
                  {index !== eduProjects.length - 1 && (
                    <Divider orientation="horizontal" mb={{ base: 5 }} />
                  )}
                </Box>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <PurpleFooter />
    </Box>
  );
};

export default ProjectsPage;

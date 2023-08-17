import { Heading, Box, List, Divider, ListItem } from "@chakra-ui/react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiCloudUpload,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoJava,
  BiLogoPython,
} from "react-icons/bi";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiBootstrap,
  SiChakraui,
  SiAdobephotoshop,
  SiKotlin,
} from "react-icons/si";

const ResumeSkills = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingBottom={10}
      paddingTop={10}
    >
      <Box>
        <Heading as="h2" size="md">
          Skill & Expertise
        </Heading>
      </Box>
      <Box display="flex" width="50%" gap={10}>
        <List width="30%">
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoHtml5 /> HTML
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoCss3 />
            CSS
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiJavascript />
            JavaScript
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiTypescript />
            TypeScript
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoReact />
            React
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiRedux />
            Redux
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiCloudUpload />
            Rest API
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoGithub />
            Git / Github
          </ListItem>
        </List>
        <List width="30%">
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiBootstrap />
            Bootstrap
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiChakraui />
            ChakraUI
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoTailwindCss />
            TailwindCSS
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiAdobephotoshop />
            Adobe Photoshop
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoFigma />
            Figma
          </ListItem>
        </List>
        <List width="30%">
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <SiKotlin />
            Kotlin
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoJava />
            Java
          </ListItem>
          <ListItem alignItems="center" display="flex" gap={2} padding={1}>
            <BiLogoPython />
            Python
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ResumeSkills;

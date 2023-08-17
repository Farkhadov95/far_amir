import { Heading, Box, List, Text, ListItem } from "@chakra-ui/react";
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
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      gap={{ base: 3, md: 0 }}
      marginY={5}
      paddingBottom={10}
      paddingTop={10}
    >
      <Box>
        <Heading as="h2" size="md">
          Skill & Expertise
        </Heading>
      </Box>
      <Box
        display="flex"
        width={{ base: "100%", md: "60%" }}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <List width="30%">
          <ListItem
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            gap={2}
            padding={1}
            width="fit-content"
          >
            <BiLogoHtml5 size="1em" />
            <Text>HTML</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            padding={1}
            width="fit-content"
          >
            <BiLogoCss3 />
            <Text>CSS</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiJavascript />
            <Text>JavaScript</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiTypescript />
            <Text>TypeScript</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoReact />
            <Text>React</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiRedux />
            <Text>Redux</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiCloudUpload />
            <Text>Rest API</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoGithub />
            <Text>Git / Github</Text>
          </ListItem>
        </List>
        <List width="30%">
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiBootstrap />
            <Text>Bootstrap</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiChakraui />
            <Text>Chakra UI</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoTailwindCss />
            <Text>Tailwind CSS</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiAdobephotoshop />
            <Text>Adobe Photoshop</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoFigma />
            <Text>Figma</Text>
          </ListItem>
        </List>
        <List width="30%">
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <SiKotlin />
            <Text>Kotlin</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoJava />
            <Text>Java</Text>
          </ListItem>
          <ListItem
            alignItems="center"
            display="flex"
            gap={2}
            width="fit-content"
            padding={1}
          >
            <BiLogoPython />
            <Text>Python</Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ResumeSkills;

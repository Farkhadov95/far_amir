import {
  Heading,
  Box,
  List,
  Text,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import ResumeSkillsItem from "./ResumeSkillsItem";
import { skills, otherSkills } from "../../data/skills";

const ResumeSkills = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      gap={{ base: 3, md: 0 }}
      marginY={5}
      paddingBottom={10}
      paddingTop={{ base: 5, md: 10 }}
    >
      <Box>
        <Heading as="h2" size="md">
          Skill & Expertise
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        columnGap={{ base: 2, md: 5 }}
      >
        {skills.map((skill, index) => (
          <ResumeSkillsItem key={index} icon={skill.icon} name={skill.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ResumeSkills;

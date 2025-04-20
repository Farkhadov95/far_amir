import { Heading, Box, SimpleGrid, VStack } from "@chakra-ui/react";
import ResumeSkillsItem from "./ResumeSkillsItem";
import { frontendSkills, backendSkills, mobileSkills } from "../../data/skills";

const ResumeSkills = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      gap={{ base: 3, md: 0 }}
      marginY={5}
      paddingBottom={10}
      paddingTop={{ base: 5, md: 10 }}
    >
      <Heading as="h2" size="md" paddingBottom={{ base: 5, lg: 0 }}>
        Skill & Expertise
      </Heading>

      <VStack gap={5}>
        <Box gap={{ base: 5 }} width={{ base: "100%" }}>
          <Heading as="h2" size="sm" alignSelf={"flex-start"} paddingBottom={2}>
            Mobile
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3 }}
            columnGap={{ base: 1, md: 5 }}
            width={{ base: "100%" }}
          >
            {mobileSkills.map((skill, index) => (
              <ResumeSkillsItem
                key={index}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box gap={5} width={{ base: "100%" }}>
          <Heading as="h2" size="sm" alignSelf={"flex-start"} paddingBottom={2}>
            Frontend
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3 }}
            columnGap={{ base: 1, md: 5 }}
            width={{ base: "100%" }}
          >
            {frontendSkills.map((skill, index) => (
              <ResumeSkillsItem
                key={index}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box gap={5} width={{ base: "100%" }}>
          <Heading as="h2" size="sm" alignSelf={"flex-start"} paddingBottom={2}>
            Backend
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3 }}
            columnGap={{ base: 1, md: 5 }}
            width={{ base: "100%" }}
          >
            {backendSkills.map((skill, index) => (
              <ResumeSkillsItem
                key={index}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default ResumeSkills;

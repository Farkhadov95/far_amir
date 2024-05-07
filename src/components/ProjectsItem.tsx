import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Divider,
  UnorderedList,
  ListItem,
  HStack,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";
import { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectsItem = ({ project }: Props) => {
  const { id, title, type, description, image, github, live, backend, tools } =
    project;
  const toolsSting = tools.map((tool) => JSON.stringify(tool));
  const toolsList = toolsSting.join(", ").replace(/"/g, "");

  return (
    <Box
      marginBottom={{ base: 5 }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <HStack mb={{ base: 5, md: 5 }}>
        <Heading fontSize="xl">{title}</Heading>
        <Tag colorScheme="green" fontSize={{ base: "10px", md: "14px" }}>
          {type}
        </Tag>
      </HStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 2, md: 5, lg: 10 }}>
        <Image
          src={image}
          border={"1px solid"}
          borderRadius={"10px"}
          width={{ base: "100%" }}
          height={{ base: "auto" }}
          objectFit="cover"
        />

        <Box>
          <Box paddingBottom={3} textAlign="justify">
            <Text as="b">Features:</Text>
            <UnorderedList>
              {description.map((item, index) => (
                <ListItem key={index} fontSize={{ base: "14px", sm: "16px" }}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Text
            paddingBottom={3}
            textAlign="justify"
            fontSize={{ base: "12px", sm: "16px" }}
          >
            <Text as="b">Tools:</Text> {toolsList}
          </Text>
        </Box>
      </SimpleGrid>

      <HStack gap={3} mt={{ base: 5 }}>
        <Button as={Link} href={github} fontSize={{ base: "12px", sm: "16px" }}>
          Github
        </Button>
        {live && (
          <Button as={Link} href={live} fontSize={{ base: "12px", sm: "16px" }}>
            Live
          </Button>
        )}
        {backend && (
          <Button
            as={Link}
            href={backend}
            fontSize={{ base: "12px", sm: "16px" }}
          >
            Server
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default ProjectsItem;

import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Divider,
} from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
  tools: string[];
  features: string[];
}

const ProjectsItem = ({
  title,
  description,
  github,
  live,
  image,
  tools,
  features,
}: Props) => {
  const toolsSting = tools.map((tool) => JSON.stringify(tool));
  const toolsList = toolsSting.join(", ").replace(/"/g, "");

  const featuresSting = features.map((feature) => JSON.stringify(feature));
  const featuresList = featuresSting.join(", ").replace(/"/g, "");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      marginTop={{ base: 5, md: "40px" }}
      marginBottom={{ base: 5, md: "40px" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width={{ base: "100%", md: "45%" }}
        marginBottom={{ base: 5, md: 0 }}
      >
        <Box>
          <Heading fontSize="xl" paddingBottom={5}>
            {title}
          </Heading>
          <Text paddingBottom={3} textAlign="justify">
            {description}
          </Text>
          <Text paddingBottom={3} textAlign="justify">
            <Text as="b">Tools:</Text> {toolsList}
          </Text>
          <Text paddingBottom={5} textAlign="justify">
            <Text as="b">Features:</Text> {featuresList}
          </Text>
        </Box>
        <Box>
          <Button as={Link} href={github} marginRight={5}>
            Github
          </Button>
          <Button as={Link} href={live}>
            Live
          </Button>
        </Box>
      </Box>
      <Image
        src={image}
        width={{ base: "100%", md: "45%" }}
        height="auto"
        objectFit="cover"
      />
    </Box>
  );
};

export default ProjectsItem;

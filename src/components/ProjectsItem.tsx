import { Box, Heading, Text, Image, Link, Button } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
}

const ProjectsItem = ({ title, description, github, live, image }: Props) => {
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
          <Text paddingBottom={5} textAlign="justify">
            {description}
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

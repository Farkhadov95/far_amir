import { Heading, Box, Divider } from "@chakra-ui/react";
import ResumeItem from "./ResumeItem";
import { Course, education } from "../../data/courses";
import { Skill } from "../../data/skills";

type Props = {
  title: string;
  items: Course[];
};

const ResumeSection = ({ title, items }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      gap={{ base: 3, md: 0 }}
      marginY={5}
      paddingBottom={5}
      paddingTop={10}
    >
      <Box>
        <Heading as="h2" size="md">
          {title}
        </Heading>
      </Box>
      <Box width={{ base: "100%", md: "100%", lg: "60%" }}>
        {items.map((item, index) => (
          <ResumeItem key={index} course={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ResumeSection;

import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  date: string;
  title: string;
  description: string;
}

const ResumeItem = ({ date, title, description }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={5}
      marginBottom={5}
      width="40vw"
      alignItems="center"
    >
      <Text fontSize="sm">{date}</Text>
      <Box width="50%">
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ResumeItem;

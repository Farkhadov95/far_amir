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
      marginBottom="20px"
      width="100%"
      alignItems="center"
    >
      <Text fontSize="sm" width="45%">
        {date}
      </Text>
      <Box width="50%">
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default ResumeItem;

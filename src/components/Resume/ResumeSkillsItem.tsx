import { Icon, Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  name: string;
};

const ResumeSkillsItem = ({ icon, name }: Props) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      gap={2}
      padding={1}
      width="fit-content"
    >
      <Icon as={icon} size="1em" />
      <Text>{name}</Text>
    </Box>
  );
};

export default ResumeSkillsItem;

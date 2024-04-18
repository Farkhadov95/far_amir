import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  color: string;
};

const HomeDots = ({ title, color }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const route = `/${title.toLowerCase()}`;
    console.log(route);
    navigate(route);
  };

  return (
    <Box
      border="2px solid black"
      borderRadius="50%"
      padding="2"
      width={{ base: "80px", sm: "100px" }}
      height={{ base: "80px", sm: "100px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={`${color}.300`}
      onClick={handleClick}
      cursor="pointer"
    >
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize={{ base: 12, md: 15 }}
      >
        {title}
      </Text>
    </Box>
  );
};

export default HomeDots;

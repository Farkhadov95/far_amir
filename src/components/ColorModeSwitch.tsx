import { IconButton, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const handleSwitch = () => {
    toggleColorMode();
  };
  return (
    <IconButton
      variant={"outline"}
      aria-label={"Color Mode Switch"}
      colorScheme="teal"
      icon={
        colorMode === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
      }
      onClick={handleSwitch}
    />
  );
};

export default ColorModeSwitch;

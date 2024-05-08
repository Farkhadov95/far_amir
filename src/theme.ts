import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource-variable/geologica";
import { color } from "framer-motion";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Geologica", sans-serif`,
    body: `"Geologica", sans-serif`,
  },
  color: {
    myYellow: "#FFB703'",
    myBlue: "#219EBC",
    myRed: "#C44536",
    myGreen: "#2A9D8F",
  },
});
export default theme;

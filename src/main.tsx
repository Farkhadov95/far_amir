import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  ColorModeContext,
  ColorModeScript,
} from "@chakra-ui/react";
import App from "./App";
import { Route, RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

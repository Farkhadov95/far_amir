import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { VStack } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = () => {
  return (
    <VStack
      alignItems={"normal"}
      boxSizing={"border-box"}
      minHeight="100vh"
      gap={0}
      scrollBehavior={"smooth"}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default Layout;

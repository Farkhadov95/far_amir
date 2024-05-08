import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Divider, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import DrawerNavigation from "./DrawerNav";

const Layout = () => {
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 600);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <VStack
      alignItems={"normal"}
      boxSizing={"border-box"}
      minHeight="100vh"
      gap={0}
      scrollBehavior={"smooth"}
    >
      <Navbar />
      {/* {isSmallScreen ? <DrawerNavigation /> :} */}
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default Layout;

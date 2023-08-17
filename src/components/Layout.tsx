import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Divider } from "@chakra-ui/react";
import Footer from "./Footer";
import DrawerNavigation from "./DrawerNav";

const Layout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box paddingX={{ base: 5, md: 10 }} paddingY={5}>
      {isSmallScreen ? <DrawerNavigation /> : <Navbar />}
      <Outlet />
      <Divider orientation="horizontal" />
      <Footer />
    </Box>
  );
};

export default Layout;

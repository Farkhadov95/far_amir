import { Box, Divider, Heading } from "@chakra-ui/react";
import ProjectsItem from "../components/ProjectsItem";
import gamehub from "../../public/game-hub.png";
import wtw from "../../public/what-to-watch.png";
import kekstagram from "../../public/kekstagram.png";
import bigtrip from "../../public/big-trip.png";
import sedona from "../../public/sedona.png";
import Lottie from "lottie-react";
import projects from "../assets/projects.json";

const ProjectsPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Projects
        </Heading>
        <Box width="25%">
          <Lottie animationData={projects} />
        </Box>
      </Box>

      <ProjectsItem
        title="GameHub"
        description="This is a website where you can find the information about games, see their ratings and read the latest news."
        github="https://github.com/Farkhadov95/game-hub"
        live="https://game-hub-two-snowy.vercel.app"
        image={gamehub}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="WhatToWatch"
        description="This is an online cinema web application that allows users to browse and watch movies. It was created as my course project, with specific requirements and deadlines."
        github="https://github.com/Farkhadov95/853355-what-to-watch-12"
        live="https://farkhadov95.github.io/853355-what-to-watch-12/"
        image={wtw}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Kekstagram"
        description="This is a website where you can find the information about games, see their ratings and read the latest news."
        github="https://github.com/Farkhadov95/853355-kekstagram-29"
        live="https://farkhadov95.github.io/853355-kekstagram-29/"
        image={kekstagram}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Big Trip"
        description="This is a web application that allows users to plan and organize trips. It was created as my course project, with specific requirements and deadlines."
        github="https://github.com/Farkhadov95/853355-big-trip-simple-19"
        live="https://farkhadov95.github.io/853355-big-trip-simple-19/build/"
        image={bigtrip}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Sedona"
        description="A website promoting a tourist location. This is a responsive website created as a part of a technical project, with specific requirements and a deadline."
        github="https://github.com/Farkhadov95/853355-sedona-19"
        live="https://farkhadov95.github.io/853355-sedona-19/source/"
        image={sedona}
      />
    </Box>
  );
};

export default ProjectsPage;

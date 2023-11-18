import { Box, Divider, Heading } from "@chakra-ui/react";
import ProjectsItem from "../components/ProjectsItem";
import gamehub from "/game-hub.webp";
import wtw from "/what-to-watch.webp";
import kekstagram from "/kekstagram.webp";
import bigtrip from "/big-trip.webp";
import sedona from "/sedona.webp";
import camera from "/camera-store.webp";
import Lottie from "lottie-react";
import projects from "../assets/projects.json";

const ProjectsPage = () => {
  return (
    <Box padding={{ base: "20px", md: "50px" }}>
      <Box display="flex" alignItems="center" width="100%">
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
          Projects
        </Heading>
        <Box width={{ base: "25%", xl: "15%" }}>
          <Lottie animationData={projects} />
        </Box>
      </Box>

      <ProjectsItem
        title="Camera Online Store"
        description={[
          "State Management using Redux",
          "Navigation using React Router",
          "Live search matches",
          "Promo slider using SwiperJS",
          "Axios for retrieving and sending data from/to API",
          "Filtration by price/category/type/level",
          "Sorting by price or popularity in ascending or descending orders",
          "Dynamic pagination",
          "Add/removing items to/from basket",
          "Reviews: retriving and posting reviews",
          "Form validation using React Hook Form",
          "Users can apply promo codes 'camera-333, camera-444, camera-555' to get a discount",
          "Component render testing using React Testing Library and Vitest",
        ]}
        github="https://github.com/Farkhadov95/camera-build-vite"
        live="https://camera-online-store.vercel.app/"
        image={camera}
        tools={[
          "HTML",
          "CSS",
          "TypeScript",
          "React",
          "Redux",
          "Axios",
          "React Hook Form",
          "Swiper JS",
          "React Testing Library",
          "Vitest",
        ]}
      />
      <Divider orientation="horizontal" />

      <ProjectsItem
        title="GameHub"
        description={[
          "State Management using Zustand",
          "Fetching and Posting Data using React Query",
          "Navigation using React Router",
          "Filtration by genre",
          "Sorting by platform",
          "Ordering",
          "Searching",
          "Responsive UI",
          "Dark Mode",
        ]}
        github="https://github.com/Farkhadov95/game-hub"
        live="https://game-hub-two-snowy.vercel.app"
        image={gamehub}
        tools={[
          "HTML",
          "CSS",
          "TypeScript",
          "React",
          "Redux",
          "Axios",
          "React Query",
          "Zustand",
        ]}
      />
      <Divider orientation="horizontal" />

      <ProjectsItem
        title="WhatToWatch"
        description={[
          "State Management using Redux",
          "Axios for retrieving and sending data from/to API",
          "Sorting by genre",
          "Reviews: retriving and posting reviews",
          "Form Validation",
          "Authentication using Token",
        ]}
        github="https://github.com/Farkhadov95/853355-what-to-watch-12"
        live="https://farkhadov95.github.io/853355-what-to-watch-12/"
        image={wtw}
        tools={["HTML", "CSS", "TypeScript", "React", "Redux", "Axios"]}
      />
      <Divider orientation="horizontal" />

      <ProjectsItem
        title="Kekstagram"
        description={[
          "Fetching and Posting Data using FetchAPI",
          "Sorting",
          "Image editing",
          "Comments: retriving and posting comments",
          "Form Validation",
        ]}
        github="https://github.com/Farkhadov95/853355-kekstagram-29"
        live="https://farkhadov95.github.io/853355-kekstagram-29/"
        image={kekstagram}
        tools={["HTML", "CSS", "JavaScript", "NoUiSlider"]}
      />
      <Divider orientation="horizontal" />

      <ProjectsItem
        title="Big Trip"
        description={[
          "Model-View-Presenter architectural pattern",
          "Fetching and Posting Data using FetchAPI",
          "Sorting",
        ]}
        github="https://github.com/Farkhadov95/853355-big-trip-simple-19"
        live="https://farkhadov95.github.io/853355-big-trip-simple-19/build/"
        image={bigtrip}
        tools={["HTML", "CSS", "JavaScript", "OOP", "MVP"]}
      />
      <Divider orientation="horizontal" />

      <ProjectsItem
        title="Sedona"
        description={[
          "Pixel Perfect",
          "Semantic markup",
          "Responsive UI",
          "Progressive enhancement",
        ]}
        github="https://github.com/Farkhadov95/853355-sedona-19"
        live="https://farkhadov95.github.io/853355-sedona-19/source/"
        image={sedona}
        tools={["HTML", "CSS", "Less", "Gulp", "JavaScript"]}
      />
    </Box>
  );
};

export default ProjectsPage;

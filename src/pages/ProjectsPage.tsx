import { Box, Divider, Heading } from "@chakra-ui/react";
import ProjectsItem from "../components/ProjectsItem";
import gamehub from "/game-hub.webp";
import wtw from "/what-to-watch.webp";
import kekstagram from "/kekstagram.webp";
import bigtrip from "/big-trip.webp";
import sedona from "/sedona.webp";
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
        title="GameHub"
        description="Dive into the realm of gaming with our dedicated platform, designed for enthusiasts and casual gamers alike. Here, you can effortlessly search for your favorite games, explore a plethora of options sorted by genre, popularity, or release date, and delve deep into comprehensive details that illuminate every aspect of the gameplay. Whether you're looking for the next adventure to embark upon or seeking insights into a classic favorite, our website is your one-stop destination for all things gaming."
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
        features={["Fetching and Posting Data", "Sorting", "Searching"]}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="WhatToWatch"
        description="Welcome to my online cinema platform, a culmination of dedicated effort and passion as part of my course project. Designed with precision and adhering to specific academic requirements, this application serves as a digital gateway for movie enthusiasts. Users can seamlessly browse through an array of films, spanning genres and eras, and immerse themselves in cinematic experiences right at their fingertips. Beyond just a course mandate, this platform was created with the vision of simplifying movie viewing for all. Dive in, explore, and let the magic of cinema captivate you, anytime and anywhere."
        github="https://github.com/Farkhadov95/853355-what-to-watch-12"
        live="https://farkhadov95.github.io/853355-what-to-watch-12/"
        image={wtw}
        tools={["HTML", "CSS", "TypeScript", "React", "Redux", "Axios"]}
        features={[
          "Fetching and Posting Data",
          "Sorting",
          "Form Validation, Authentication using Token",
        ]}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Kekstagram"
        description="Step into a world where photography meets community, right here on our platform. Inspired by the essence of Instagram, our website offers users the chance to browse a diverse collection of photos, engage with them through comments, and even sort them based on your preferences. But that's not all – as a contributor, you can upload your unique moments and add a touch of creativity with our array of filters. Whether you're here to explore, share, or simply appreciate the art of photography, our platform welcomes you to a vibrant community of visual storytellers."
        github="https://github.com/Farkhadov95/853355-kekstagram-29"
        live="https://farkhadov95.github.io/853355-kekstagram-29/"
        image={kekstagram}
        tools={["HTML", "CSS", "JavaScript"]}
        features={["Fetching and Posting Data", "Sorting", "Form Validation"]}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Big Trip"
        description="Embark on your next adventure with confidence using our intuitive trip planning web application. Whether you're jet-setting to a remote location or exploring local wonders, our platform ensures your journey is well-organized and stress-free. Users can tailor their trips to specific destinations, select preferred modes of transport, and even take advantage of special offers exclusive to our platform. Born out of rigorous academic requirements, this application was meticulously crafted as part of my course project, meeting precise criteria and timelines. Beyond its academic genesis, our web application stands as a testament to smart travel, simplifying the planning process for wanderlust-filled souls around the globe."
        github="https://github.com/Farkhadov95/853355-big-trip-simple-19"
        live="https://farkhadov95.github.io/853355-big-trip-simple-19/build/"
        image={bigtrip}
        tools={["HTML", "CSS", "JavaScript", "OOP", "MVP"]}
        features={["Fetching and Posting Data", "Sorting"]}
      />
      <Divider orientation="horizontal" />
      <ProjectsItem
        title="Sedona"
        description="Dive deep into the enchanting beauty of Sedona through our dedicated website, meticulously designed to showcase all the wonders this tourist haven has to offer. From its iconic red rock formations to its vibrant arts scene, our platform brings Sedona's allure right to your fingertips. Responsively crafted, this website ensures a seamless browsing experience across devices, making it easier than ever to plan your next visit or simply daydream about Arizona's desert gem. Conceived and executed as part of a technical project, our platform not only adheres to specific criteria and stringent deadlines but also stands as a heartfelt invitation to explore the magic of Sedona."
        github="https://github.com/Farkhadov95/853355-sedona-19"
        live="https://farkhadov95.github.io/853355-sedona-19/source/"
        image={sedona}
        tools={["HTML", "CSS", "Less", "Gulp", "JavaScript"]}
        features={["Pixel Perfect", "Semantic markup"]}
      />
    </Box>
  );
};

export default ProjectsPage;

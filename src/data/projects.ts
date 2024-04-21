import camera from "/camera-store.webp";
import gamehub from "/game-hub.webp";
import wtw from "/what-to-watch.webp";
import kekstagram from "/kekstagram.webp";
import bigtrip from "/big-trip.webp";
import sedona from "/sedona.webp";
import ch from "/ch.webp";
import vue_weather from "/vue_weather.webp";
import { useId } from "react";

export enum ProjectType {
  front = "Frontend",
  back = "Backend",
  full = "Fullstack",
}

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  description: string[];
  github: string;
  live: string;
  backend: string;
  image: string;
  tools: string[];
};

const projects: Project[] = [
  {
    id: useId(),
    title: "CollectionHub",
    type: ProjectType.full,
    description: [
      "State Management using Zustand",
      "Navigation using React Router",
      "Full-Text Search to find collections, items or comments",
      "Multi-language support using i18next",
      "User Interface using Chakra UI",
      "Form validation using React Hook Form",
      "Socket.io to see new comments in real-time",
      "Axios for retrieving and sending data from/to API",
      "Promo slider using SwiperJS",
      "Mongoose/MongoDB for Database",
      "Express.js as Node.js Framework",
      "Authentication using JWT",
      "Filtration and Sorting",
      "Dark Mode",
    ],
    github: "https://github.com/Farkhadov95/collection-hub",
    live: "https://collection-hub.vercel.app",
    backend: "https://github.com/Farkhadov95/collection-hub-server",
    image: ch,
    tools: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Chakra UI",
      "Zustand",
      "i18next",
      "Axios",
      "React Hook Form",
      "Swiper JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
  },
  {
    id: useId(),
    title: "GameHub",
    type: ProjectType.front,
    description: [
      "State Management using Zustand",
      "Fetching and Posting Data using React Query and Axios",
      "Navigation using React Router",
      "Filtration by genre",
      "Sorting by platform",
      "Searching",
      "Responsive UI",
      "Dark Mode",
    ],
    github: "https://github.com/Farkhadov95/game-hub",
    live: "https://game-hub-two-snowy.vercel.app",
    backend: "",
    image: gamehub,
    tools: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Chakra UI",
      "Redux",
      "Axios",
      "React Query",
      "Zustand",
    ],
  },
  {
    id: useId(),
    title: "Sedona",
    type: ProjectType.front,
    description: [
      "Pixel Perfect",
      "Semantic markup",
      "Responsive UI",
      "Progressive enhancement",
    ],
    github: "https://github.com/Farkhadov95/853355-sedona-19",
    live: "https://farkhadov95.github.io/853355-sedona-19/source/",
    backend: "",
    image: sedona,
    tools: ["HTML", "CSS", "Less", "Gulp", "JavaScript"],
  },
];

const eduProjects: Project[] = [
  {
    id: useId(),
    title: "Vue Weather",
    type: ProjectType.front,
    description: [
      "Vue.js as project framework",
      "TailwindCSS for styling",
      "Axios for retrieving and sending data from/to API",
      "OpenWeather API for weather data",
    ],
    github: "https://github.com/Farkhadov95/vue-weather",
    live: "https://vue-weather-sooty.vercel.app",
    backend: "",
    image: vue_weather,
    tools: ["HTML", "CSS", "TailwindCSS", "JavaScript", "Vue.js", "Axios"],
  },
  {
    id: useId(),
    title: "Camera Store",
    type: ProjectType.front,
    description: [
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
    ],
    github: "https://github.com/Farkhadov95/camera-build-vite",
    live: "https://camera-online-store.vercel.app/",
    backend: "",
    image: camera,
    tools: [
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
    ],
  },
  {
    id: useId(),
    title: "WhatToWatch",
    type: ProjectType.front,
    description: [
      "State Management using Redux",
      "Axios for retrieving and sending data from/to API",
      "Navigation using React Router",
      "Sorting by genre",
      "Reviews: retriving and posting reviews",
      "Form Validation",
      "Authentication using Token",
    ],
    github: "https://github.com/Farkhadov95/853355-what-to-watch-12",
    live: "https://farkhadov95.github.io/853355-what-to-watch-12/",
    backend: "",
    image: wtw,
    tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "Axios"],
  },
  {
    id: useId(),
    title: "Kekstagram",
    type: ProjectType.front,
    description: [
      "Fetching and Posting Data using FetchAPI",
      "Sorting",
      "Image editing",
      "Comments: retriving and posting comments",
      "Form Validation",
    ],
    github: "https://github.com/Farkhadov95/853355-kekstagram-29",
    live: "https://farkhadov95.github.io/853355-kekstagram-29/",
    backend: "",
    image: kekstagram,
    tools: ["HTML", "CSS", "JavaScript", "NoUiSlider"],
  },
  {
    id: useId(),
    title: "Big Trip",
    type: ProjectType.front,
    description: [
      "Model-View-Presenter architectural pattern",
      "Fetching and Posting Data using FetchAPI",
      "Sorting",
    ],
    github: "https://github.com/Farkhadov95/853355-big-trip-simple-19",
    live: "https://farkhadov95.github.io/853355-big-trip-simple-19/build/",
    backend: "",
    image: bigtrip,
    tools: ["HTML", "CSS", "JavaScript", "OOP", "MVP"],
  },
];

export { projects, eduProjects };

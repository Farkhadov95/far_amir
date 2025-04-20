import { IconType } from "react-icons";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiCloudUpload,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoJava,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoFirebase,
  BiSolidPurchaseTag 
} from "react-icons/bi";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiAdobephotoshop,
  SiKotlin,
  SiAndroidstudio,
  SiExpo,
  SiXcode 
} from "react-icons/si";

export type Skill = {
  icon: IconType;
  name: string;
};

const mobileSkills: Skill[] = [
  {
    icon: BiLogoReact,
    name: "React Native",
  },
  {
    icon: SiExpo,
    name: "Expo",
  },
  {
    icon: BiLogoReact,
    name: "React Navigation",
  },
  {
    icon: SiExpo,
    name: "Expo Router",
  },
  {
    icon: BiLogoReact,
    name: "Native Modules",
  },
  {
    icon: SiRedux,
    name: "Redux/Zustand",
  },
  {
    icon: BiLogoFirebase,
    name: "Firebase push-notifications",
  },
  {
    icon: BiLogoFirebase,
    name: "Firebase analytics",
  },
  {
    icon: BiSolidPurchaseTag,
    name: "In-app Purschasing",
  },
  {
    icon: BiLogoGithub,
    name: "Git/Github",
  },
  {
    icon: SiKotlin,
    name: "Kotlin",
  },
  {
    icon: SiAndroidstudio,
    name: "Android Studio",
  },
  {
    icon: SiXcode,
    name: "XCode",
  },
];

const frontendSkills: Skill[] = [
  {
    icon: BiLogoHtml5,
    name: "HTML",
  },
  {
    icon: BiLogoCss3,
    name: "CSS",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: BiLogoReact,
    name: "React",
  },
  {
    icon: SiRedux,
    name: "Redux/Zustand",
  },
  {
    icon: BiCloudUpload,
    name: "Rest API",
  },
  {
    icon: BiLogoTailwindCss,
    name: "CSS Frameworks",
  },
  {
    icon: BiLogoFigma,
    name: "Figma",
  },
  {
    icon: SiAdobephotoshop,
    name: "Photoshop",
  },
];

const backendSkills: Skill[] = [
  {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  {
    icon: SiExpress,
    name: "ExpressJS",
  },
  {
    icon: BiLogoMongodb,
    name: "MongoDB",
  },
  {
    icon: SiSocketdotio,
    name: "Socket.io",
  },
  {
    icon: BiLogoPython,
    name: "Python",
  },
  {
    icon: BiLogoJava,
    name: "Java",
  },
];


export { mobileSkills, frontendSkills, backendSkills };

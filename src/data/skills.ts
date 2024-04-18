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
} from "react-icons/si";

export type Skill = {
  icon: IconType;
  name: string;
};

const skills: Skill[] = [
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
    icon: BiLogoGithub,
    name: "Git/Github",
  },
  {
    icon: BiLogoJava,
    name: "Java",
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
    icon: BiLogoPython,
    name: "Python",
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

const otherSkills: Skill[] = [];

export { skills, otherSkills };

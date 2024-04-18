import ResumeItem from "../components/Resume/ResumeItem";

export type Course = {
  date: string;
  title: string;
  description: string;
};

const courses: Course[] = [
  {
    date: "September 2022 - August 2023",
    title: "HTML Academy",
    description: "Profession 'React Developer'",
  },
  {
    date: "February - May 2023",
    title: "HTML Academy",
    description: "React. Development of Complex Front-end Applications.",
  },
  {
    date: "December - February 2023",
    title: "HTML Academy",
    description: "JavaScript. Architecture of Front-end Applications",
  },
  {
    date: "May - September 2020",
    title: "HTML Academy",
    description: "JavaScript. Professional Development of Web Interfaces",
  },
  {
    date: "March - May 2020",
    title: "HTML Academy",
    description: "Professional HTML & CSS, Level 2",
  },
  {
    date: "May - August 2020",
    title: "Udacity",
    description: "Front-end Web Developer. One Million Uzbek Coders",
  },
];

const education: Course[] = [
  {
    date: "2021-2022",
    title: "University of Greenwich",
    description: "MSc Computer Science",
  },
  {
    date: "2014-2018",
    title: "Bangor University",
    description: "BSc Industrial Management",
  },
];

const work: Course[] = [
  {
    date: "February - April 2024",
    title: "Itransition",
    description: "Frontend Developer Internship",
  },
  {
    date: "September 2023 - Present",
    title: "Liga-A",
    description: "Frontend Developer Internship",
  },
];

export { courses, education, work };

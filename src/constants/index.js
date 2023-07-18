import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  gog,
  job_junction,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    audio: "aboutMe",
  },
  {
    id: "work",
    title: "Work",
    audio: "myWork",
  },
  {
    id: "contact",
    title: "Contact",
    audio: "contactMe",
  },
];

const services = [
  {
    title: "Leadership Development Manager",
    icon: mobile,
  },
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Js & Node JS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sr. Full Stack Web Developer",
    company_name: "Geeks of Gurukul",
    icon: gog,
    iconBg: "#E6DEDD",
    date: "April 2023 - July 2023",
    points: [
      "Led and managed a team of 7 developers and 2 UI/UX designers, fostering a productive and cohesive environment.",
      "Thrived on brainstorming, logic building, and meticulously analyzing the workflow to ensure successful project outcomes.",
      "Leveraged proficiency in various technologies, frameworks, and tools to develop robust and scalable web applications.",
      "Demonstrated a result-oriented professional mindset, consistently delivering high-quality solutions that exceeded client expectations.",
    ],
  },
  {
    title: "Leadership Development Manager",
    company_name: "Job Junction - Group Project",
    icon: job_junction,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    points: [
      "Collaborated with designers, developers, and project managers to develop and maintain web applications.",
      "Wrote clean, maintainable, and efficient code, troubleshooting, debugging & testing, and deploying web applications.",
      "Stayed up to date with emerging web development trends and technologies.",
      "Led the planning, logic design, and solution implementation while effectively assigning tasks to team members.",
    ],
  },
];

export { services, technologies, experiences };

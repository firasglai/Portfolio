import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {PiStudent,PiCertificateBold} from "react-icons/pi";
import {BsBook} from "react-icons/bs"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "End of Year Internship",
    location: "BFI Groupe, Lac Tunis",
    description:
      "I worked on a digtial marketing plateform for 6 months with angular, spring boot and power Bi. and from there I upskilled to the full stack .",
    icon: React.createElement(CgWorkAlt),
    date: "01/01/2020 - 30/06/2020",
  },
  {
    title: "Computer science degree",
    location: "Carthage University , ISSAT Mateur",
    description:
      "I graduated after 3 years of studying. and then i tried freelancing for a year . ",
    icon: React.createElement(PiCertificateBold),
    date: "2020",
  },
  {
    title: "Software engineer",
    location: "Polytech intl, rue du lac d'Annecy Tunis",
    description:
      "I'm now studying for a software engineering degree, while also continuing to freelance and working on some side projects to keep on enhancing my skills and learning new technologies .",
    icon: React.createElement(PiStudent),
    date: "2021 - present",
  },
  {
    title: "Internship",
    location: "Digit-R, Centre urbain nord Tunis",
    description:
      "The design and implementation of an Appointment managemment system, responsible for the fullstack development of the application, i continued after the internship to work on tasks as a freelancer.",
    icon: React.createElement(CgWorkAlt),
    date: "01/08/2023 - 01/10/2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Express.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "SpringBoot",
  "Angular",
  "RestAPI",
  "SOAP",
  "MySQL",
  "MongoDB",
  "Docker",
  "Jenkins",
  "Framer Motion",
  "Three.js",
] as const;

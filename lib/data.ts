import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {PiStudent,PiCertificateBold} from "react-icons/pi";
import {BsBook} from "react-icons/bs";
import enlinks from "@/public/locales/en.json";
import frlinks from "@/public/locales/fr.json";
import * as LuIcons from 'react-icons/lu';
import * as PiIcons from 'react-icons/pi';
import * as CgIcons from'react-icons/cg';

// Map Icons from JSON files 
export const iconMapping = {
  LuGraduationCap: LuIcons.LuGraduationCap,
  PiCertificateBold: PiIcons.PiCertificateBold,
  PiStudent: PiIcons.PiStudent,
  CgWorkAlt: CgIcons.CgWorkAlt,
};
export const imageMapping = {
  corpcommentImg: require("@/public/corpcomment.png"),
  rmtdevImg: require("@/public/rmtdev.png"),
  wordanalyticsImg: require("@/public/wordanalytics.png"),
  // Add other images here
} as const;

//  ? helper functions to map through the translated objects
export const TranslatedLinks = (currentLanguage: string) => {
  // Use the current language to determine which translation to use
  const translatedLinks = currentLanguage === 'fr' ? frlinks : enlinks;
  return translatedLinks.links.map((link) => ({
    ...link,
    name: link.name, 
  }));
};
export const TranslatedEducation = (currentLanguage: string) => {
  const translatedEducation = currentLanguage === 'fr' ? frlinks.education : enlinks.education;
  return translatedEducation;
};

export const TranslatedExperience = (currentLanguage: string) => {
const translatedExpericence = currentLanguage === 'fr' ? frlinks.experience : enlinks.experience;
return translatedExpericence;
}

export const TranslatedProjects = (currentLanguage: string) => {
  const translatedProjects = currentLanguage === 'fr' ? frlinks.projects : enlinks.projects;
  return translatedProjects;
};

//! changed it in Translation File under @locales (Deprecated)
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
    title: "Internship",
    location: "Digit-R, Centre urbain nord Tunis",
    description:
      "The design and implementation of an Appointment managemment system, responsible for the fullstack development of the application, i continued after the internship to work on different tasks as a freelancer.",
    icon: React.createElement(CgWorkAlt),
    date: "01/08/2023 - 01/10/2023",
  },
] as const;

export const projectsData = [
  {
    title: "University Management System",
    description:
      "University Management System  with EJB architecture, DAO pattern, with three user interfaces for administrators, teachers and students.",
    tags: ["JavaEE", "Servlet 3.0", "MySQL", "EJB", "Bootstrap 4"],
    imageUrl: corpcommentImg,
  },
  {
    title: " Digital platform in the banking sector",
    description:
      "Digitial marketing plateform for banking client, with products and cards suggestions to clients depending on their activities.",
    tags: ["Angular", "Java", "SpringBoot", "PowerBI", "Angular-Material"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AppointmentEase",
    description:
      "An Appointment management system to make appointments for doctors and patients, easing the doctor/patients appointments with notifications and calendars.",
    tags: ["Angular", "RxJs" , "SpringBoot", "Spring-Security", "Angular-Calendar" ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Netflix-Clone",
    description:
      "A Netflix Clone application with two users interface Admins and Clients, with a Node Js backend and a MongoDb Database.",
    tags: ["React", "SCSS" , "Node.js", "Express.js", "JWT" ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "3D-Threadz",
    description:
      "Developed 3D Customisation Tool with React and react-three-fiber, integrating Three.js for interactive apparel customization. Gained basic knowledge of Three.js while working with React components",
    tags: ["React", "Tailwindcss" , "Node.js", "Express.js", "Three.js" ],
    imageUrl: wordanalyticsImg,
  },
] as const;

//! changed it in Translation File under @locales (Deprecated)
export const educationData = [
  {
    title: "Bachelor Degree",
    location: "Bach Hamba college , Bizerte",
    description:
      "I graduated with a bachlor degree in computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Computer Science Degree",
    location: "Carthage University, ISSAT Mateur",
    description:
      "I graduated after 3 years of studying. Then, I tried freelancing for a year.",
    icon: React.createElement(PiCertificateBold),
    date: "2020",
  },
  {
    title: "Software Engineering Degree",
    location: "Polytech Intl, Rue du Lac d'Annecy Tunis",
    description:
      "Currently studying for a software engineering degree, while working on side projects to enhance my skills.",
    icon: React.createElement(PiStudent),
    date: "2021 - Present",
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
  "RabitMQ",
  "Framer Motion",
  "Three.js",
] as const;

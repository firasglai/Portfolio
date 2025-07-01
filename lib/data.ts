import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import unimanagementImg from "@/public/UniManag.png";
import aptease from "@/public/aptease.png";

import bfi from "@/public/bfilogin.png";
import uniImg from "@/public/registerUni.png";
import reddiamond from "@/public/redDiamond.png";
import ecommerce from "@/public/home.png";
import {PiStudent,PiCertificateBold} from "react-icons/pi";
import {BsBook} from "react-icons/bs";
import springBackend from "@/public/springBackend.jpg";
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
  unimanagementImg: require("@/public/UniManag.png"),
  bfi: require("@/public/bfilogin.png"),
  aptease: require("@/public/aptease.png"),
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
  
  // Map image URLs from string keys to actual image objects
  if (translatedProjects.items) {
    translatedProjects.items = translatedProjects.items.map((project: any) => {
      // Find the corresponding project from projectsData to ensure we have the right image
      const originalProject = projectsData.find(p => p.id === project.id);
      
      if (originalProject && project.imageUrl && typeof project.imageUrl === 'string') {
        // If the imageUrl is a string key in the imageMapping, replace it with the actual image
        if (imageMapping[project.imageUrl as keyof typeof imageMapping]) {
          project.imageUrl = imageMapping[project.imageUrl as keyof typeof imageMapping];
        }
      }
      
      return project;
    });
  }
  
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
    id: "university-management",
    title: "University Management System",
    description:
      "University Management System  with EJB architecture, DAO pattern, and three interfaces for administrators, teachers and students.",
    tags: ["JavaEE", "Servlet 3.0", "MySQL", "EJB", "Bootstrap 4"],
    imageUrl: unimanagementImg,
    githubrepo:"https://github.com/firasglai/JavaEE-management-web-app",
    preview:"",
  },
  {
    id: "digital-banking-platform",
    title: " Digital platform in the banking sector",
    description:
      "Digitial marketing plateform for banking client, with products and cards suggestions to clients depending on their activities.",
    tags: ["Angular", "Java", "SpringBoot", "PowerBI", "Angular-Material"],
    imageUrl: bfi,
    githubrepo:"https://github.com/firasglai/Digital-Marketing-App-Back-end",
    preview:"",
  },
  {
    id: "appointmentease-backend",
    title: "AppointmentEase Backend",
    description:
      "A secure Appointment management system , easing the doctor and patients appointments with notifications.",
    tags: ["Spring-Boot", "Spring-Security", "Mailtrap", "MySQL"],
    imageUrl: springBackend,
    githubrepo:"https://github.com/firasglai/Hospital-Backend",
    preview:"",
  },
    {
      id: "appointmentease-frontend",
      title: "AppointmentEase Frontend",
      description:
        "A Front-end Client for the  Appointment management system made with Angular 15.",
      tags: ["Angular", "Angular-Material", "RxJs" ,"Angular-Calendar" ],
      imageUrl: aptease,
      githubrepo:"https://github.com/firasglai/Angular_Hospital",
      preview:"",
    },
    {
      id: "music-label-management",
      title: "Music Label Production Management System",
      description:
        "Front End Developper role, took part in developping a management system for a music label production company.",
      tags: ["React", "SCSS", "Chartjs" ,"Zustand" ],
      imageUrl: reddiamond,
      githubrepo:"https://github.com/firasglai/Red-Front",
      preview:"",
    },
    {
      id: "modern-ecommerce",
      title: "Modern E-Commerce Application",
      description:
        "Next.js ecommerce app, with Framer Motion animations and modern UI/UX design",
      tags: ["NextJs", "TailwindCSS", "Framer-Motion" ,"Zustand", "Stripe", "Strapi CMS"],
      imageUrl: ecommerce,
      githubrepo:"https://github.com/firasglai/Clothing-Shop",
      preview:"",
    },
    {
      id: "ecoline-web",
      title: "Ecoline Web",
      description:
        "Built a secure video streaming backend with Laravel and Mux, reducing load times by 30% and ensuring content protection. Developed a high-performance React.js client hosted on Vercel, achieving a 92% PageSpeed Insights score and boosting session duration by 25% through lazy loading and dynamic imports. Implemented CI/CD pipelines with GitHub Actions, cutting deployment errors by 40% and accelerating release cycles by 20%.",
      tags: ["Laravel", "Mux", "React.js", "Vercel", "GitHub Actions"],
      imageUrl: "",
      githubrepo: "",
      preview: "",
    },
    {
      id: "reddiamond-accounting",
      title: "Reddiamond Accounting (continued)",
      description:
        "Designed and deployed an appointment management system using Angular and Spring Boot, reducing scheduling conflicts and improving booking efficiency by 50%. Integrated an interactive calendar with real-time notifications, streamlining user coordination and boosting operational efficiency across departments. Built a full-featured digital marketing platform with Angular (front-end) and Spring Boot (back-end), supporting campaign tracking and performance analytics through Power BI dashboards, enhancing marketing insight and reporting for stakeholders.",
      tags: ["Angular", "Spring Boot", "Power BI"],
      imageUrl: "",
      githubrepo: "",
      preview: "",
    },
    {
      id: "reddiamond-backstage",
      title: "Reddiamond Backstage",
      description:
        "Architected and developed a modular front-end interface for a music label management platform using React.js, enabling the onboarding of 20+ artists and content managers. Integrated interactive dashboards with Chart.js for real-time analytics on artist performance, streams, and revenue trends, enhancing decision-making efficiency. Optimized front-end performance and usability, resulting in a 30% increase in daily platform usage.",
      tags: ["React.js", "Chart.js"],
      imageUrl: "",
      githubrepo: "",
      preview: "",
    },
    {
      id: "3s-internships",
      title: "3S-Internships",
      description:
        "Translated Figma designs into interactive, mobile-responsive interfaces using React and Tailwind CSS, reducing design-to-deployment time by 25%. Engineered and deployed backend services with Node.js, Prisma ORM, and MySQL, including a secure authentication system supporting over 1,000 users. Delivered key features such as an interactive Kanban project management tool, a workspace-switching calendar, and real-time video chat functionality between staff and interns/candidates, boosting team coordination and productivity. Contributed to code reviews and implemented CI/CD practices, decreasing page load times by 35% and improving overall system reliability.",
      tags: ["React", "Tailwind CSS", "Node.js", "Prisma ORM", "MySQL"],
      imageUrl: "",
      githubrepo: "",
      preview: "",
    }
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

// Map various tag names to the correct StackIcon name for react-icon-cloud
export const stackIconMap: Record<string, string> = {
  "nextjs": "nextdotjs",
  "react": "react",
  "typescript": "typescript",
  "javascript": "javascript",
  "tailwindcss": "tailwindcss",
  "html": "html5",
  "html5": "html5",
  "css": "css3",
  "css3": "css3",
  "scss": "sass",
  "sass": "sass",
  "nodejs": "nodejs",
  "node.js": "nodejs",
  "node": "nodejs",
  "angular": "angular",
  "springboot": "spring",
  "spring-boot": "spring",
  "spring-security":"springsecurity",
  "angular-material":"angular",
  "rxjs":"reactivex",
  "angular-calendar":"angular",
  "spring": "spring",
  "mysql": "mysql",
  "bootstrap4": "bootstrap",
  "powerbi": "powerbi",
  "java": "java",
  "javaee": "java",
  "java ee": "java",
  "servlet": "java",
  "ejb": "java",
  "strapi": "strapi",
  "strapi cms": "strapi",
  "stripe": "stripe",
  "zustand": "redux",
  "reactquery":"reactquery",
  "framer-motion": "framer",
  "chartjs": "chartjs",
  "mailtrap":"mailtrap",
};

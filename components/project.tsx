"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaEye, FaReact, FaAngular, FaJs, FaNode, FaJava, FaPython, FaPhp, FaDatabase, FaGitAlt, FaDocker, FaAws, FaFilePdf } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiSpring, SiLaravel, SiExpo, SiStripe, SiVercel, SiPrisma, SiFramer, SiChartdotjs, SiBootstrap, SiReactquery, SiPowerapps, SiSass } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { DiMysql } from "react-icons/di";
import toast from 'react-hot-toast';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Technology icon mapping
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const iconMap: { [key: string]: JSX.Element } = {
    'react': <FaReact className="text-blue-400" />,
    'reactjs': <FaReact className="text-blue-400" />,
    'reactnative': <FaReact className="text-blue-400" />,
    'angular': <FaAngular className="text-red-500" />,
    'nextjs': <SiNextdotjs className="text-black dark:text-white" />,
    'typescript': <SiTypescript className="text-blue-600" />,
    'javascript': <FaJs className="text-yellow-500" />,
    'nodejs': <FaNode className="text-green-500" />,
    'java': <FaJava className="text-orange-600" />,
    'javaee': <FaJava className="text-orange-600" />,
    'python': <FaPython className="text-blue-500" />,
    'php': <FaPhp className="text-indigo-600" />,
    'laravel': <SiLaravel className="text-red-600" />,
    'oauth': <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">🔐</div>,
    'spring': <SiSpring className="text-green-600" />,
    'springboot': <SiSpring className="text-green-600" />,
    'springsecurity': <SiSpring className="text-green-600" />,
    'mysql': <SiMysql className="text-blue-600" />,
    'postgresql': <SiPostgresql className="text-blue-700" />,
    'mongodb': <SiMongodb className="text-green-500" />,
    'tailwindcss': <SiTailwindcss className="text-cyan-400" />,
    'bootstrap': <SiBootstrap className="text-purple-600" />,
    'bootstrap4': <SiBootstrap className="text-purple-600" />,
    'scss': <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded"></div>,
    'expo': <SiExpo className="text-black dark:text-white" />,
    'stripe': <SiStripe className="text-purple-600" />,
    'vercel': <SiVercel className="text-black dark:text-white" />,
    'prisma': <SiPrisma className="text-teal-600" />,
    'prismaorm': <SiPrisma className="text-teal-600" />,
    'framermotion': <SiFramer className="text-pink-500" />,
    'zustand': <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>,
    'chartjs': <SiChartdotjs className="text-orange-400" />,
    'angularmaterial': <FaAngular className="text-red-500" />,
    'rxjs': <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>,
    'angularcalendar': <FaAngular className="text-red-500" />,
    'reactquery': <SiReactquery className="text-red-500" />,
    'tanstackquery': <SiReactquery className="text-red-500" />,
    'reactpdf': <FaFilePdf className="text-red-600" />,
    'powerbi': <SiPowerapps className="text-yellow-600" />,
    'githubactions': <FaGitAlt className="text-orange-500" />,
    'mux': <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded font-bold text-white text-xs flex items-center justify-center">M</div>,
    'mailtrap': <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded font-bold text-white text-xs flex items-center justify-center">@</div>,
    'servlet': <FaJava className="text-orange-600" />,
    'servlet30': <FaJava className="text-orange-600" />,
    'ejb': <FaJava className="text-orange-600" />,
    'aichat': <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs">AI</div>,
    'progresstracking': <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-sm flex items-center justify-center text-white text-xs">📊</div>,
    'expovideo': <SiExpo className="text-black dark:text-white" />,
    'strapicms': <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded font-bold text-white text-xs flex items-center justify-center">S</div>,
    'strapi': <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded font-bold text-white text-xs flex items-center justify-center">S</div>,
  };
  
  return iconMap[techLower] || <div className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded text-white text-xs flex items-center justify-center font-bold">{tech.charAt(0).toUpperCase()}</div>;
};

type ProjectProps = (typeof projectsData)[number];

// Function to create a shorter description
const createShortDescription = (fullDescription: string, maxLength: number = 120): string => {
  if (fullDescription.length <= maxLength) return fullDescription;
  
  const words = fullDescription.split(' ');
  let shortDesc = '';
  
  for (const word of words) {
    if ((shortDesc + word).length > maxLength) break;
    shortDesc += word + ' ';
  }
  
  return shortDesc.trim() + '...';
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubrepo,
  preview,
  id,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  const showToast = () => {
    toast.error(t('projects.livePreviewSoon', "Live Project is coming soon"));
  };
  
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
   
  if (!id) {
    console.error("Project is missing ID:", title);
  }
  
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {/* <Link href={`/project/${id}`}> */}
        <section 
        className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          
          {/* Mobile Image - visible only on mobile */}
          <div className="sm:hidden w-full h-40 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="pt-6 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] space-y-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="leading-relaxed text-gray-700 dark:text-white/70 text-sm">
              {description}
            </p>
            
            {/* Technology Icons */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-white/80 dark:bg-black/20 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
                  title={tag}
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    {getTechIcon(tag)}
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-white/80">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Image - visible only on desktop */}
          <div className="absolute hidden sm:block top-8 -right-32 w-[26rem] rounded-t-lg shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-[1.12] group-hover:-translate-x-8 group-hover:translate-y-8 group-hover:-rotate-6 group-even:group-hover:translate-x-8 group-even:group-hover:translate-y-8 group-even:group-hover:rotate-6 group-even:right-[initial] group-even:-left-32 overflow-hidden group-hover:shadow-3xl">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.05]"
            />
          </div>
        </section>
      {/* </Link> */}
    </motion.div>
  );
}

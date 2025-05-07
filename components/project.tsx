"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaEye } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import toast from 'react-hot-toast';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectProps = (typeof projectsData)[number];

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
      <Link href={`/project/${id}`}>
        <section 
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 space-y-4">
          <div className="pt-6 pb-2 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold mt-4">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
            </p>
          </div>
          <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40 overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="w-full h-full object-cover"
            />
            {/* Blurry overlay with text on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-full backdrop-blur-sm bg-black/20 flex items-center justify-center rounded-t-lg">
                <span className="flex items-center gap-1 text-white text-base font-medium drop-shadow-lg">
                  more details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}

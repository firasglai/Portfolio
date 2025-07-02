"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from 'react-i18next';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface AboutProps {
  content: {
    frontmatter: any;
    serializedContent: MDXRemoteSerializeResult;
  };
}

export default function About({ content }: AboutProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { ref } = useSectionInView(currentLanguage === 'fr' ? 'propos' : 'About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        {content.frontmatter.title}
      </SectionHeading>
      
      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <MDXRemote {...content.serializedContent} />
      </div>
    </motion.section>
  );
}

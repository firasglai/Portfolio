"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t , i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const { ref } = useSectionInView(currentLanguage === 'fr' ? 'propos' : 'About',);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> {t('About.title')}</SectionHeading>
      <p className="mb-3">
        {t('About.par1')}
      </p>
      
      <p className="mb-3">
        {t('About.par2')}
      </p>
      
      <p className="mb-3">
        {t('About.par3')}
      </p>

      <p>
        {t('About.par4')}
      </p>
    </motion.section>
  );
}

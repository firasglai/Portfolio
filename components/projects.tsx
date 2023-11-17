"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { TranslatedProjects } from "@/lib/data";
import { useTranslation } from 'react-i18next';
export default function Projects() {
  const { t , i18n} = useTranslation();
  const { ref } = useSectionInView("Projects", 0.5);
  
  const translatedProjects = TranslatedProjects(i18n.language);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('projects.main')}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

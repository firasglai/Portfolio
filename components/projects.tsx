"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { TranslatedProjects } from "@/lib/data";
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { ref } = useSectionInView("Projects", 0.5);
  
  const translatedProjects = TranslatedProjects(i18n.language);
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('projects.main')}</SectionHeading>
      <div>
        {translatedProjects.items.map((project: any, index: number) => {
          // Find the corresponding project from projectsData to get the imageUrl and other non-localized data
          const originalProject = projectsData.find(p => p.id === project.id);
          
          if (!originalProject) {
            console.error("Missing original project data for:", project.id);
            return null;
          }
          
          // Merge the translated data with the original data that needs to be preserved
          const mergedProject = {
            ...originalProject,
            title: project.title,
            description: project.description,
            tags: project.tags,
          };
          
          return (
            <React.Fragment key={index}>
              <Project {...mergedProject} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

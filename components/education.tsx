
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslation } from 'react-i18next';
import {TranslatedEducation, iconMapping} from "@/lib/data";
import { HiLocationMarker } from "react-icons/hi";
export default function Education() {

    const { ref } = useSectionInView("Education");
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();

    const translatedEducation = TranslatedEducation(i18n.language);
    const educationItems = Object.values(translatedEducation.items);
    return (
        <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
          <SectionHeading>{t('education.main')}</SectionHeading>
          <VerticalTimeline lineColor="">
          {educationItems.map((item, index) => {
        const IconComponent = iconMapping[item.icon as keyof typeof iconMapping];
        const isRightSide = index % 2 === 1; // Check if this is a right-side card

          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                  padding: "2rem 3rem",
                  borderRadius: "8px",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  borderLeft:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                dateClassName={`!text-sm !font-medium ${isRightSide ? '!mr-8' : '!ml-8'}`}
                icon={<IconComponent />}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                  boxShadow: "0 0 0 4px #f3f4f6",
                }}
              >
                <h3 className="font-semibold capitalize text-lg mb-3 text-center">{item.title}</h3>
                <div className="flex items-center justify-center gap-2 text-center">
                  <HiLocationMarker className="text-gray-500 dark:text-white/60 text-sm flex-shrink-0" />
                  <p className="font-medium !mt-0 text-gray-600 dark:text-white/70 text-sm">{item.location}</p>
                </div>
                {/* <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p> */}
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
          </VerticalTimeline>
        </section>
      );

}


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

export default function Education() {

    const { ref } = useSectionInView("Education");
    const { theme } = useTheme();

    return (
        <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
          <SectionHeading>My Education</SectionHeading>
          <VerticalTimeline lineColor="">
        {educationData.map((item, index) => ([
            <React.Fragment key={index}>
                <VerticalTimelineElement
                    contentStyle={{
                        background:
                            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background:
                            theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                        fontSize: "1.5rem",
                    }}
                >
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                        {item.description}
                    </p>
                </VerticalTimelineElement>
            </React.Fragment>
        ]))}
          </VerticalTimeline>
        </section>
      );

}

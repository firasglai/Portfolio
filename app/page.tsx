import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";
import { IconStack } from "@/components/stack";
import { withTranslation } from 'react-i18next';
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <Experience />
      <Skills />
      {/* <IconStack/> */}
      <Projects />
      <Contact />
      
    </main>
  );
}

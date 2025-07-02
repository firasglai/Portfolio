import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";
import { IconStack } from "@/components/stack";
import { getMDXContentSerialized } from "@/lib/mdx";

interface HomeProps {
  searchParams: { lang?: 'en' | 'fr' };
}

export default async function Home({ searchParams }: HomeProps) {
  const language = searchParams.lang || 'en';
  // Pre-serialize MDX content at build time with language
  const aboutContent = await getMDXContentSerialized('about', language);
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About content={aboutContent} />
      <SectionDivider />
      <Education />
       <SectionDivider />
      <Experience />
       {/* <SectionDivider /> */}
      <Skills />
       <SectionDivider />
      {/* <IconStack/> */}
      <Projects />
       <SectionDivider />
      <Contact />
    </main>
  );
}

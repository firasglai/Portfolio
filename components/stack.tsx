
import IconCloud from "@/components/magicui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "reactnative",
  "expo",
  "angular",
  "springboot",
  "threedotjs",
  "html5",
  "css3",
  "tailwindcss",
  "framer",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "strapi",
  "nginx",
  "vercel",
  "postman",
  "docker",
  "git",
  "github",
  "bitbucket",
  "visualstudiocode",
  // "intellijidea",
  "jenkins",
  "rabbitmq",
  "figma",
];

// const slugs = [
//   "html5",
//   "css",
//   "javascript",
//   "typescript",
//   "java",
//   "spring-boot",  
//   "react",
//   "redux",
//   "next-dotjs",
//   "express-dotjs",
//   "nodejs",
//   "git",
//   "tailwind",
//   "springboot",
//   "angular",
//   "restapi",
//   "soap",
//   "mysql",
//   "postgresql",
//   "mongodb",
//   "docker",
//   "jenkins",
//   "rabitmq",
//   "framer-motion",
//   "three-js",
// ];
 
export function IconStack() {
  return (
    <div className="relative flex h-full w-full max-w-[20rem] items-center justify-center overflow-hidden rounded-lg bg-background mx-auto pb-5 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
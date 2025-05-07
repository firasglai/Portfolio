"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Menu, ChevronLeft, ChevronRight, Github, ExternalLink, Play, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechStackItem } from "@/components/tech-stack-item"
import { motion } from "framer-motion"
import { projectsData } from "@/lib/data"
import { useTranslation } from "react-i18next"
import { TranslatedProjects } from "@/lib/data"

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData.find(p => p.id === projectId);
  
  const { t, i18n } = useTranslation();
  const translatedProjects = TranslatedProjects(i18n.language);
  
  // Find the translated project data
  const translatedProject = translatedProjects.items.find(
    (p: any) => p.id === projectId
  );
  
  // Check if we're in a browser environment
  const isBrowser = typeof window !== "undefined"

  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Update dark mode state based on document class
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"))

    // Optional: Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Sample project images - in a real app, this would come from your data source
  const projectImages = translatedProject?.screenshots || [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  if (!project || !translatedProject) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{t('projects.projectNotFound', 'Project not found')}</h1>
        <p className="mt-2 text-gray-500">{t('projects.projectNotFoundDesc', 'The project you\'re looking for doesn\'t exist.')}</p>
        <Button className="mt-4" asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('projects.backToProjects', 'Back to projects')}
          </Link>
        </Button>
      </div>
    )
  }

  // Map tags to tech stack icons
  const techStackItems = [
    {
      name: "Next.js",
      url: "https://nextjs.org/docs",
      icon: (
        <svg viewBox="0 0 180 180" width="20" height="20">
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
            fill={isDarkMode ? "white" : "black"}
          />
          <path d="M115 54H127V126H115z" fill={isDarkMode ? "white" : "black"} />
        </svg>
      ),
    },
    {
      name: "React",
      url: "https://react.dev",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            fill={isDarkMode ? "#61DAFB" : "#61DAFB"}
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/docs/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 400 400" fill="none">
          <path d="M0 200V0H400V400H0" fill="#007ACC" />
          <path
            d="M87.7 200.7V217.7H143.8V389.2H183.9V217.7H240V200.7H87.7ZM247.4 200.7V217.7H306.6V389.2H346.7V217.7H400V200.7H247.4ZM346.7 124.3C346.7 118.1 344.9 112.8 341.3 108.5C337.7 104.1 333 101.9 327.3 101.9C321.6 101.9 316.9 104.1 313.3 108.5C309.7 112.8 307.9 118.1 307.9 124.3C307.9 130.5 309.7 135.7 313.3 140C316.9 144.4 321.6 146.6 327.3 146.6C333 146.6 337.7 144.4 341.3 140C344.9 135.7 346.7 130.5 346.7 124.3Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/docs",
      icon: (
        <svg width="20" height="12" viewBox="0 0 54 33" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
            fill="#38BDF8"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 h-full overflow-hidden mb-10">
      {/* Left Sidebar */}
      <motion.div
        className="space-y-4 overflow-y-auto pr-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Project Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold">{translatedProject.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t('projects.projectType')}</p>
        </motion.div>

        {/* Project Description */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {translatedProject.description}
          </p>
        </motion.div>

        {/* Project Links */}
        <motion.div className="space-y-2" variants={itemVariants}>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Link href={project.githubrepo} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub Repository</span>
              </Link>
            </Button>
            {project.preview && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Link href={project.preview} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span className="sr-only">Live Preview</span>
                </Link>
              </Button>
            )}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} - All Rights Reserved</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="space-y-4 overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Menu Button - Only show on mobile */}
        <div className="flex justify-end lg:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Stack Section */}
        <motion.section
          className={`${
            isDarkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-200"
          } rounded-lg p-3 shadow-sm`}
          variants={itemVariants}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{t('projects.techStack')}</h2>
            <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
              <span className="sr-only">View all tools</span>→
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {translatedProject.tags.map((tag: string, index: number) => {
              // Find matching tech stack item if available
              const techItem = techStackItems.find(item => 
                item.name.toLowerCase() === tag.toLowerCase() || 
                tag.toLowerCase().includes(item.name.toLowerCase())
              );
              
              return techItem ? (
                <TechStackItem
                  key={index}
                  name={tag}
                  url={techItem.url}
                  icon={techItem.icon}
                />
              ) : (
                <TechStackItem
                  key={index}
                  name={tag}
                  url={`https://www.google.com/search?q=${tag}+documentation`}
                  icon={
                    <span className="text-lg font-semibold">
                      {tag.charAt(0).toUpperCase()}
                    </span>
                  }
                />
              );
            })}
          </div>
        </motion.section>

        {/* Video Player - More compact */}
        {translatedProject.videoDemo && (
          <motion.section className="w-full" variants={itemVariants}>
            <div
              className={`relative aspect-[3/1] ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              } rounded-lg overflow-hidden border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={isDarkMode ? "outline" : "default"}
                    size="sm"
                    className="rounded-full flex items-center gap-2"
                  >
                    <Play className="w-3 h-3" />
                    {t('projects.demoVideo')}
                  </Button>
                </motion.div>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=900"
                alt="Project Video Thumbnail"
                fill
                className="object-cover opacity-50"
              />
            </div>
          </motion.section>
        )}

        {/* Project Screenshots Slider */}
        {projectImages.length > 0 && (
          <motion.section className="flex-1" variants={itemVariants}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">{t('projects.screenshots')}</h2>
              <div className="flex gap-1">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollLeft}
                    className="h-8 w-8 text-gray-700 dark:text-gray-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollRight}
                    className="h-8 w-8 text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide h-[calc(100%-2rem)]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projectImages.map((src, i) => (
                <motion.div
                  key={i}
                  className={`relative flex-shrink-0 w-[200px] md:w-[220px] aspect-square ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  } rounded-lg overflow-hidden border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${translatedProject.title} Screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project Details Section */}
        {(translatedProject.features || translatedProject.development) && (
          <motion.section
            className={`${
              isDarkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-200"
            } rounded-lg p-4 shadow-sm`}
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4">{t('projects.projectDetails')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {translatedProject.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t('projects.features')}</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    {translatedProject.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {translatedProject.development && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t('projects.developmentProcess')}</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    {translatedProject.development.map((step: string, idx: number) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </motion.div>
    </div>
  )
} 
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TechStackItemProps {
  name: string
  icon: ReactNode
  url: string
}

export function TechStackItem({ name, icon, url }: TechStackItemProps) {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== "undefined"

  // Safely check for dark mode without requiring the ThemeContext
  const isDarkMode = isBrowser ? document.documentElement.classList.contains("dark") : false

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: isDarkMode ? "rgba(30, 41, 59, 0.9)" : "rgba(243, 244, 246, 0.8)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={`flex items-center gap-2 ${
        isDarkMode ? "bg-gray-800/70" : "bg-white/80"
      } rounded-lg px-3 py-2 cursor-pointer border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <motion.div
          className="w-6 h-6 flex items-center justify-center"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <span className={`text-xs font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>{name}</span>
      </Link>
    </motion.div>
  )
} 
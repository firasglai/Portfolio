"use client"

import { useTheme } from "@/context/theme-context"
import { stackIconMap } from "@/lib/data"
import { renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud"
import { useEffect, useState } from "react"

interface TechStackItemProps {
  name: string
  url: string
}

export function TechStackItem({ name, url }: TechStackItemProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "")
  const stackIconKey = stackIconMap[normalized] || stackIconMap[name.toLowerCase()] || null

  const [iconObj, setIconObj] = useState<any>(null)

  useEffect(() => {
    if (stackIconKey) {
      fetchSimpleIcons({ slugs: [stackIconKey] }).then((data) => {
        if (data && data.simpleIcons && data.simpleIcons[stackIconKey]) {
          setIconObj(data.simpleIcons[stackIconKey])
        } else {
          setIconObj(null)
        }
      })
    }
  }, [stackIconKey])

  let iconElement = null
  if (stackIconKey && iconObj) {
    iconElement = renderSimpleIcon({
      icon: iconObj,
      bgHex: isDarkMode ? "#080510" : "#f3f2ef",
      fallbackHex: isDarkMode ? "#ffffff" : "#6e6e73",
      minContrastRatio: isDarkMode ? 2 : 1.2,
      size: 22,
    })
  }

  return (
    <div className={`flex items-center gap-2 ${isDarkMode ? "bg-gray-800/70" : "bg-white/80"} rounded-lg px-3 py-2 cursor-pointer border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <span className={`w-8 h-8 flex items-center justify-center rounded-full shadow-sm ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
          {iconElement || <span className="text-lg font-semibold">{name.charAt(0).toUpperCase()}</span>}
        </span>
        <span className={`text-xs font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>{name}</span>
      </a>
    </div>
  )
} 
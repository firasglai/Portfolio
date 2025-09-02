import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {/* Back button navigation */}
      <div className="fixed top-4 left-4 z-50 opacity-90 hover:opacity-100 transition-opacity">
        <Link href="/#projects" className="flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105 text-xs">
          <ArrowLeft className="w-3 h-3" />
          <span className="font-medium">Back</span>
        </Link>
      </div>
      {/* Main content with reduced padding */}
      <div className="container mx-auto px-3 md:px-4 lg:px-6">
        {children}
      </div>
    </div>
  )
} 
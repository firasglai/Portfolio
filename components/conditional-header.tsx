"use client";

import { usePathname } from 'next/navigation';
import Header from './header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Don't render header on project detail pages
  if (pathname.startsWith('/project/')) {
    return null;
  }
  
  return <Header />;
} 
"use client"

import { useEffect, useState } from "react";

export function ThemeHandler() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (systemDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      setIsMounted(false)
    }
  }, [])

  return null;
}
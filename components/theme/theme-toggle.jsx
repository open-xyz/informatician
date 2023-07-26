"use client"

import  {useState,useEffect} from "react"
import { useTheme } from "next-themes"
import { Icons } from "@/components/Icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const [sysMode, setSysMode] = useState('');
  useEffect(() => {
    const matchDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSysMode(matchDarkMode ? 'dark' : 'light');
  }, []);
  
  return (
    <button
    className="mr-9 inline-flex self-center"
      onClick={() => setTheme(theme === "light" ? "dark" : sysMode === "light" && theme==="system"  ? "dark" : "light")}
    >
      <Icons.sun className="-rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Icons.moon className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
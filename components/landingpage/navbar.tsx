"use client"
import {useEffect, useState} from 'react'
import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export const Navbar = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div>  <nav className="bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50">
    <div className="mx-auto px-6 py-4 max-w-7xl">
      <div className="items-center justify-between flex">
        <div className="items-center flex space-x-2">
          <span>
            <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            />
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            RavenIQ Labs
          </span>
        </div>
        <div className="md:flex items-center hidden space-x-8">
          <a
            href="/"
            className="text-gray-600 dark:text-neutral-400 hover:text-blue-600
        dark:hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-gray-600 dark:text-neutral-400 hover:text-blue-600
        dark:hover:text-blue-400 transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="text-gray-600 dark:text-neutral-400 hover:text-blue-600
        dark:hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="/success_stories"
            className="text-gray-600 dark:text-neutral-400 hover:text-blue-600
        dark:hover:text-blue-400 transition-colors"
          >
            Success Stories
          </a>
          <a
            href="/contact"
            className="text-gray-600 dark:text-neutral-400 hover:text-blue-600
            dark:hover:text-blue-400 transition-colors"
            >
            Contact
          </a>
            <div className='hover:bg-neutral-900 p-2 rounded-full cursor-pointer' onClick={toggleTheme}>
              {theme === "dark" ? <Sun className='text-amber-500' size={18}/> : <Moon className='text-blue-500' size={18}/>}
            </div>
          <button
            type="submit"
            className="hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors bg-blue-600
        dark:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Get Started
          </button>
        </div>
        <button
          type="submit"
          className="dark:text-neutral-400 md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            id="Windframe_yxyNr8zoZ"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  </div>
  )
}
'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Define pages where the text should be black
  const isBlackTextPage = ["/about", "/workshops", "/esports", "/about"].includes(pathname);
  const noBlackBgPages = ["/contact", "/workshops", "/esports", "/about"];

  return (
    <motion.nav
      className={`fixed top-0 left-0 font-custom right-0 z-50 transition-colors duration-300 border-b border-black${ 
        (scrolled || isOpen) && !noBlackBgPages.includes(pathname) 
        ? 'bg-black/90 backdrop-blur-sm ' // Add bottom border here
        : 'bg-transparent' 
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between p-6">
        <Link href="/" className={`text-2xl font-bold ${isBlackTextPage ? 'text-black'  : 'text-white'}`}>
          CU PlayNation
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link href="/about" className={`${isBlackTextPage ? 'text-black hover:text-gray-600' : 'text-white hover:text-purple-200'}`}>About Us</Link>
          <Link href="/workshops" className={`${isBlackTextPage ? 'text-black hover:text-gray-600' : 'text-white hover:text-purple-200'}`}>Workshops</Link>
          <Link href="/esports" className={`${isBlackTextPage ? 'text-black hover:text-gray-600' : 'text-white hover:text-purple-200'}`}>eSports Tournaments</Link>
          <Link href="/highlights" className={`${isBlackTextPage ? 'text-black hover:text-gray-600' : 'text-white hover:text-purple-200'}`}>Community Highlights</Link>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Link 
            href="/join"
            className={`rounded-md px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors ${
              isBlackTextPage 
                ? 'bg-black/10 text-black hover:bg-black/20' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Join Us
          </Link>
          <Link
            href="/tournaments"
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              isBlackTextPage 
                ? 'bg-black text-white hover:bg-gray-200' 
                : 'bg-white text-purple-700 hover:bg-purple-100'
            }`}
          >
            Explore Tournaments
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isBlackTextPage ? 'text-black' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link 
                href="/about" 
                className="text-black hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/workshops" 
                className="text-black hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Workshops
              </Link>
              <Link 
                href="/esports" 
                className="text-black hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                eSports Tournaments
              </Link>
              <Link 
                href="/highlights" 
                className="text-black hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Community Highlights
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                <Link 
                  href="/join"
                  className="rounded-md px-4 py-2 text-sm font-medium text-center bg-gray-100 text-black hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
                <Link
                  href="/esports"
                  className="rounded-md px-4 py-2 text-sm font-medium text-center bg-purple-700 text-white hover:bg-purple-800"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Tournaments
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

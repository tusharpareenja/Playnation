'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 font-custom right-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold text-white">
          CU PlayNation
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link href="/about" className="text-white hover:text-purple-200">About Us</Link>
          <Link href="/workshops" className="text-white hover:text-purple-200">Workshops</Link>
          <Link href="/tournaments" className="text-white hover:text-purple-200">eSports Tournaments</Link>
          <Link href="/highlights" className="text-white hover:text-purple-200">Community Highlights</Link>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Link 
            href="/join"
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Join Us
          </Link>
          <Link
            href="/tournaments"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100"
          >
            Explore Tournaments
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
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
            className="md:hidden bg-black/90 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link 
                href="/about" 
                className="text-white hover:text-purple-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/workshops" 
                className="text-white hover:text-purple-200"
                onClick={() => setIsOpen(false)}
              >
                Workshops
              </Link>
              <Link 
                href="/tournaments" 
                className="text-white hover:text-purple-200"
                onClick={() => setIsOpen(false)}
              >
                eSports Tournaments
              </Link>
              <Link 
                href="/highlights" 
                className="text-white hover:text-purple-200"
                onClick={() => setIsOpen(false)}
              >
                Community Highlights
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link 
                  href="/join"
                  className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white text-center backdrop-blur-sm transition-colors hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
                <Link
                  href="/tournaments"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-purple-700 text-center transition-colors hover:bg-purple-100"
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


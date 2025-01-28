'use client'

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserProfileDropdown } from "./user-profile-dropdown"
import { useSession, signIn } from "next-auth/react"
import { handleGoogleSignIn } from "./signinserver"
import { Avatar, AvatarFallback, AvatarImage  } from "@/components/ui/avatar"
import { User, LogOut, Settings, UserCircle } from "lucide-react";
import { signOut } from "next-auth/react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()

  const handleGoogleLogin = async() => {
    await handleGoogleSignIn();
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isBlackTextPage = ["/about", "/workshops", "/esports", "/about"].includes(pathname)
  const noBlurBgPages = ["/contact", "/workshops", "/esports", "/about"]

  return (
    <motion.nav
      className={`fixed top-0 left-0 font-custom right-0 z-50 transition-colors duration-300 border-b border-black ${
        (scrolled || isOpen) && !noBlurBgPages.includes(pathname) ? "bg-black backdrop-blur-lg" : "backdrop-blur"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between p-6">
        <Link href="/" className={`text-2xl font-bold ${isBlackTextPage ? "text-black" : "text-white"}`}>
          CU PlayNation
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/about"
            className={`${isBlackTextPage ? "text-black hover:text-gray-600" : "text-white hover:text-purple-200"}`}
          >
            About Us
          </Link>
          <Link
            href="/workshops"
            className={`${isBlackTextPage ? "text-black hover:text-gray-600" : "text-white hover:text-purple-200"}`}
          >
            Workshops
          </Link>
          <Link
            href="/esports"
            className={`${isBlackTextPage ? "text-black hover:text-gray-600" : "text-white hover:text-purple-200"}`}
          >
            eSports Tournaments
          </Link>
          <Link
            href="/highlights"
            className={`${isBlackTextPage ? "text-black hover:text-gray-600" : "text-white hover:text-purple-200"}`}
          >
            Community Highlights
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {status === "authenticated" && session.user ? (
            <>
              <Link
                href="/tournaments"
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isBlackTextPage
                    ? "bg-black text-white hover:bg-gray-200"
                    : "bg-white text-purple-700 hover:bg-purple-100"
                }`}
              >
                Explore Tournaments
              </Link>
              <UserProfileDropdown user={session.user} isBlackTextPage={isBlackTextPage} />
            </>
          ) : (
            <>
              <Button
                onClick={handleGoogleLogin}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isBlackTextPage
                    ? "bg-black/10 text-black hover:bg-black/20"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Join Us
              </Button>
              <Link
                href="/tournaments"
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isBlackTextPage
                    ? "bg-black text-white hover:bg-gray-200"
                    : "bg-white text-purple-700 hover:bg-purple-100"
                }`}
              >
                Explore Tournaments
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isBlackTextPage ? "text-black" : "text-white"}`}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link href="/about" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/workshops" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Workshops
              </Link>
              <Link href="/esports" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                eSports Tournaments
              </Link>
              <Link href="/highlights" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Community Highlights
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                {status === "authenticated" && session.user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={session.user.image || ""} alt={session.user.name || "User"} />
                        <AvatarFallback>
                          {session.user.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{session.user.name}</span>
                    </div>
                    <Button variant="ghost" className="text-red-600 hover:text-red-700" onClick={() => signOut()}>
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        handleGoogleLogin()
                        setIsOpen(false)
                      }}
                      className="rounded-md px-4 py-2 text-sm font-medium text-center bg-gray-100 text-black hover:bg-gray-200"
                    >
                      Join Us
                    </Button>
                    <Link
                      href="/tournaments"
                      className="rounded-md px-4 py-2 text-sm font-medium text-center bg-purple-700 text-white hover:bg-purple-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Explore Tournaments
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


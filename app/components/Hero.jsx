'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import image from '../../public/Images/hero.jpg'

export default function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
  }

  return (
    <div className="relative min-h-screen font-custom overflow-hidden bg-none">
      {/* Hero Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6">
      <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `url('/Images/hero.jpg')`, // Correct path
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            
            }}
        />

        <div className="relative z-10 max-w-4xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-5xl font-bold text-white md:text-7xl"
          >
            Welcome to{" "}
            <span className="relative inline-block ">
              CU PlayNation!
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  transformOrigin: "left",
                  width: "100%",
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-lg text-purple-100 md:text-xl"
          >
            Join our vibrant community of gamers and developers. Dive into exciting workshops
            and thrilling eSports tournaments to unlock your potential in the gaming world.
            Let&apos;s play and grow together!
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="flex justify-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full max-w-md rounded-md bg-white/10 px-4 py-2 text-white placeholder-purple-200 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-8 py-2 font-medium text-white transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

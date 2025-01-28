'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { handleGoogleSignIn } from "./signinserver"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const handleGoogleLogin = async () => {
    try {
      await handleGoogleSignIn()
      console.log("Google sign-in successful")
    } catch (error) {
      console.error("Error during Google sign-in:", error)
    }
  }

  return (
    <div className="relative min-h-screen font-custom overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/Images/valo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hero Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="relative z-10 max-w-4xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-5xl font-bold text-white md:text-7xl"
          >
            Welcome to{" "}
            <span className="relative inline-block">
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
            Join our vibrant community of gamers and developers. Dive into
            exciting workshops and thrilling eSports tournaments to unlock your
            potential in the gaming world. Let&apos;s play and grow together!
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={handleGoogleLogin}
              className="rounded-md bg-blue-500 px-8 py-2 font-medium text-white transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Join Now"
            >
              Join Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

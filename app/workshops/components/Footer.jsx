import { Button } from "@/components/ui/button"
import React from "react"

function Footer() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Explore Our Game Development Workshops
            </h1>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700">
              Join our immersive workshops designed to equip you with essential skills in game design, programming, and
              project management. Learn from industry experts and work on real-world projects to enhance your
              development capabilities.
            </p>

            {/* Workshops Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Workshop 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Workshop 1</h2>
                <p className="text-gray-600">
                  Introduction to Game Design: Learn the basics of creating engaging game mechanics.
                </p>
              </div>

              {/* Workshop 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Workshop 2</h2>
                <p className="text-gray-600">
                  Advanced Programming: Dive deep into coding techniques for game development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


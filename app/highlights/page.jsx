"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"

const events = [
  {
    id: 1,
    title: "Valorant tournament",
    image: "/Images/valorant.jpg",
    date: "20 January, 2025",
    description:
      "An intensive valornant tournament held at Chandigarh University. With over 100 of participants competing with each other in teams.",
    align: "right",
  },
  {
    id: 2,
    title: "BGMI",
    image: "/Images/bgmi.jpg",
    date: "25 January, 2025",
    description:
      "An intensive BGMI tournament held at Chandigarh University. With over 100 of participants competing with each other in teams.",
    align: "left",
  },
  {
    id: 3,
    title: "Ludo Tournament",
    image: "/Images/event3.jpg",
    date: "November 18, 2024",
    description: "Another great e-sports tournament held in Chnadigarh University at techfest of Ludo.",
    align: "right",
  },
]

function EventCard({ event, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 my-20  ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
         
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function CommunityHighlights() {
  return (
    <section className="relative bg-white mt-20 font-custom">
      {/* Animated waves at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 1440 320"
          className="relative w-full h-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            initial={{ pathLength: 0, x: -1440 }}
            animate={{ pathLength: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            fill="#000000"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </motion.svg>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Event Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our past events and see how our community comes together to create, learn, and grow in game
            development
          </p>
        </motion.div>

        {/* Events in zigzag layout */}
        <div className="space-y-20">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h3>
          <a
            href="#"
            className="inline-block bg-black text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Join Our Next Event
          </a>
        </motion.div>
      </div>
    </section>
  )
}


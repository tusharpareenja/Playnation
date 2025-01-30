'use client'

import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { handleGoogleSignIn } from "./signinserver"
import { useSession } from "next-auth/react"



const testimonials = [
  {
    name: "Alex Johnson",
    role: "Aspiring Game Developer",
    quote: "Joining CU PlayNation has been a game-changer for my career. The workshops provided me with valuable insights into my path as a game developer.",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Maria Gonzalez",
    role: "eSports Competitor",
    quote: "The eSports tournaments at CU PlayNation are incredibly well-organized! Competing here has boosted my confidence and opened new paths.",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "James Smith",
    role: "Game Design Student",
    quote: "The community at CU PlayNation is supportive and inspiring. I've made lifelong friends and learned so much about game design.",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emily Chen",
    role: "Content Creator",
    quote: "CU PlayNation has helped me grow my online presence. The networking opportunities we get here are invaluable for anyone interested in gaming.",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Brown",
    role: "Professional Gamer",
    quote: "Thanks to CU PlayNation, I was able to refine my skills and compete at a higher level. The coaching and support are top-notch!",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Sophie Lee",
    role: "Game Tester",
    quote: "The hands-on experience I gained from the workshops at CU PlayNation was crucial in landing my current job as a game tester.",
    stars: 5,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function TestimonialsSection() {
  const { data: session, status } = useSession()
  const handleGoogleLogin = async () => {
    try {
      await handleGoogleSignIn()
      console.log("Google sign-in successful")
    } catch (error) {
      console.error("Error during Google sign-in:", error)
    }
  }
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Member Success Stories</h2>
          <p className="text-gray-600">
            Hear from our members about their transformative experiences at CU PlayNation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 text-white hover:bg-gray-800 transition-all">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-gray-300">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Become a Member Today</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join CU PlayNation Gaming Club and immerse yourself in a community that
            nurtures your gaming passion. Sign up now to unlock exclusive benefits and
            opportunities!
          </p>
          <div className="flex gap-4 justify-center">
          <button
              onClick={handleGoogleLogin}
              className="rounded-xl bg-blue-500 px-8 py-2 font-medium  text-white transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Join Now"
            >
              {status === "authenticated" && session?.user ? "Explore Tournaments" : "Join Now"}
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}


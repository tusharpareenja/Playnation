'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import image from '../../public/Images/esports.jpeg'
import image1 from '../../public/Images/esports1.jpg'
import image2 from '../../public/Images/esports2.jpeg'

export default function WorkshopSection() {
  return (
    <div className="bg-black text-white min-h-screen font-custom">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Workshops Header Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Explore Our Game Development Workshops
            </h2>
            <p className="text-gray-400 text-lg">
              Join our immersive workshops designed to equip you with essential
              skills in game design and programming. Learn from industry experts
              and collaborate on real-world projects to enhance your development
              journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <p className="text-gray-400">
                Discover our schedule of upcoming workshops and secure your spot today.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-400">
                Benefit from the insights and mentorship of seasoned game developers.
              </p>
            </div>
          </div>
        </div>

        {/* eSports Section */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Upcoming eSports Tournaments at CU PlayNation
            </h2>
            <p className="text-gray-400 text-lg">
              Join us for thrilling eSports tournaments where gamers compete in
              popular games to showcase their skills. Connect with fellow gamers
              and seize the opportunity to launch your professional eSports career.
              Stay updated with our schedule and never miss a chance to
              participate in these exciting events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Competition Card */}
            <Card className="bg-gray-900 border-gray-800 text-white hover:bg-gray-800 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={image}
                    alt="Esports competition arena"
                    fill
                    className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Experience the Thrill of Competition
                  </h3>
                  <p className="text-gray-400">
                    Our tournaments offer a platform for gamers to compete
                    for prizes and recognition. Engage in supportive
                    environment and experience the excitement of real
                    competition.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Workshop Card */}
            <Card className="bg-gray-900 border-gray-800 text-white hover:bg-gray-800 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={image1}
                    alt="Game development workshop"
                    fill
                    className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Hands-on Game Development Workshops
                  </h3>
                  <p className="text-gray-400">
                    Get practical experience in game development through
                    our workshops. Learn from industry professionals and
                    connect with fellow aspiring developers.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Community Card */}
            <Card className="bg-gray-900 border-gray-800 text-white hover:bg-gray-800 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={image2}
                    alt="Gaming community gathering"
                    fill
                    className="object-cover  transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Join Our Gaming Community
                  </h3>
                  <p className="text-gray-400">
                    Become part of a vibrant community dedicated to
                    gaming and development. Connect with like-minded
                    individuals and unlock your potential in the gaming
                    industry.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


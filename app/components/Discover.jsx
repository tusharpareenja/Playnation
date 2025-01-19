'use client'

import Image from 'next/image'
import image from '../../public/Images/discover.jpg'

export default function DiscoverSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 font-custom">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Discover CU PlayNation
            </h1>
            <p className="text-lg text-gray-600">
              At CU PlayNation Gaming Club, we are dedicated to nurturing talent
              in game development and eSports. Founded in 2023, our vibrant
              community offers workshops and tournaments that empower
              aspiring gamers and developers to thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2 font-custom">
              <h2 className="text-3xl font-bold">
                <span className="tabular-nums">500</span> Members
              </h2>
              <p className="text-gray-600">
                Join our growing family of passionate gamers and developers who are shaping
                the future of the industry.
              </p>
            </div>

            <div className="space-y-2 font-custom">
              <h2 className="text-3xl font-bold">
                <span className="tabular-nums">50</span> Workshops
              </h2>
              <p className="text-gray-600">
                Participate in hands-on workshops that cover everything from game design to
                programming, led by industry experts.
              </p>
            </div>

            <div className="space-y-2 font-custom">
              <h2 className="text-3xl font-bold">
                <span className="tabular-nums">20</span> Tournaments
              </h2>
              <p className="text-gray-600">
                Compete in exciting eSports tournaments that provide a platform for showcasing
                your skills and pursuing your dreams.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold">2024</h2>
              <h3 className="text-2xl font-bold">Achievements</h3>
              <p className="text-gray-600">
                Celebrate our milestones as we continue to grow and support our members in their
                gaming journeys.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-96 lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="CU PlayNation gaming club meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

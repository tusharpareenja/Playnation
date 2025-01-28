"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const statistics = [
  {
    end: 1000,
    label: "members",
    description: "Join our growing community of passionate gamers and developers.",
  },
  {
    end: 200,
    label: "workshops",
    description:
      "We offer a variety of hands-on workshops designed to enhance your skills and knowledge in game development.",
  },
  {
    end: 30,
    label: "tournaments",
    description: "Participate in our competitive eSports tournaments and showcase your gaming skills.",
  },
  {
    end: 15,
    label: "success stories",
    description: "Hear from our members about their journeys and achievements within our community.",
  },
];

function CountingNumber({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(value * progress), value));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function VisionSection() {
  return (
    <section className="py-16 px-4 font-custom">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Vision and Core Values</h2>
            <p className="text-lg text-gray-700">
              At CU PlayNation Gaming Club, we are dedicated to empowering aspiring game developers and eSports players.
              Our mission is to create an inclusive environment that fosters creativity, collaboration, and excellence
              in gaming.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold">
                  <CountingNumber value={stat.end} /> {stat.label}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/Images/achievements.jpg"
            alt="Gaming community collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

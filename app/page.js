import Image from "next/image";
import HeroSection from "./components/Hero";
import DiscoverSection from "./components/Discover";
import WorkshopSection from "./components/Workshop";
import TestimonialsSection from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <DiscoverSection />
        <WorkshopSection />
        <TestimonialsSection />
      </div>
    </>
  );
}

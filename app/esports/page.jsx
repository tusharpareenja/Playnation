import { Button } from "@/components/ui/button"
import TournamentsSection from "./components/Tournaments"

export default function ESportsTournament() {
  return (
    <div className="min-h-screen relative text-black">
      {/* Content */}
      <div className="relative flex flex-col items-center px-4 py-20 font-custom mt-12">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Unleash Your eSports Potential</h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join the CU PlayNation Gaming Club and dive into the thrilling world of eSports. Compete in our upcoming
            tournaments and showcase your skills on a professional stage. Are you ready to level up?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Compete
            </Button>
            <Button size="lg" variant="outline" className="bg-slate-500 hover:bg-slate-600 text-white border-none">
              Learn More
            </Button>
          </div>
        </div>

        {/* Full-width image container */}
        <div className="w-full relative -mx-4">
          <div
            className="w-full h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url('/Images/esports1.jpg')`,
            }}
          />
        </div>
        <TournamentsSection />
      </div>
    </div>
  )
}


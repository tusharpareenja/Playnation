import { Button } from "@/components/ui/button"
import React from "react"
import Footer from "./components/Footer"

function Workshops() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center font-custom overflow-y-auto">
      <div className="w-full max-w-6xl mt-52 flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Explore Our Game Development Workshops</h1>
        <div className="w-full max-w-3xl text-center text-lg md:text-xl mb-8">
          <h2>
            Join our immersive workshops to gain hands-on experience in game design and programming. Learn from industry
            experts and collaborate on real projects to enhance your skills and kickstart your career in game
            development.
          </h2>
        </div>
        <Button className="bg-purple-400 hover:bg-purple-500 text-white w-36 rounded-xl mb-10">Learn More!</Button>
        <div className="w-full aspect-video mb-10 rounded-lg overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/Images/workshop.jpg')`,
            }}
          />
        </div>
        <div className="w-full max-w-3xl text-center">
          <p className="text-lg md:text-xl">
            More information or content can go here. This section will also be scrollable.
          </p>
        </div>
         <Footer />
      </div>
    </div>
  )
}

export default Workshops


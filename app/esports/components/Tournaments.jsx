import { Button } from "@/components/ui/button";
import Image from "next/image";

const tournaments = [
  {
    id: "1",
    title: "Intense eSports Competition",
    description:
      "Experience the thrill of competitive gaming at its finest. Our tournaments bring together top players from around the region, all vying for the championship title.",
    imageUrl:
      "",
    imageAlt: "Intense eSports Competition",
  },
  {
    id: "2",
    title: "Professional Gaming Setup",
    description:
      "Step into the world of professional gaming with our state-of-the-art setups. Perfect for both practice and competition, these setups are designed to enhance your gaming experience.",
    imageUrl:
      "",
    imageAlt: "Professional Gaming Setup",
  },
  {
    id: "3",
    title: "Celebrate Your Victory",
    description:
      "Join a community of passionate gamers and celebrate your victories together. Our tournaments are not just about competition, but also about building lasting friendships.",
    imageUrl:
      "",
    imageAlt: "Celebrate Your Victory",
  },
  
];

function TournamentCard({ tournament }) {
  return (
    <div className="space-y-4">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={tournament.imageUrl || "/placeholder.svg"}
          alt={tournament.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold">{tournament.title}</h3>
      <p className="text-gray-600">{tournament.description}</p>
      <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
        Learn More
      </Button>
    </div>
  );
}

export default function TournamentsSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get Ready for Our Exciting Upcoming Tournaments
        </h2>
        <p className="text-lg text-gray-700">
          Join us at CU PlayNation Gaming Club for thrilling eSports tournaments that offer a platform for gamers to
          showcase their skills. Whether you're a seasoned pro or a newcomer, our events are designed to challenge and
          inspire. Register now to secure your spot and compete for glory and prizes.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  );
}

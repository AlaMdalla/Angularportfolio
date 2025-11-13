import { Users, Trophy } from "lucide-react";

const clubs = [
  {
    name: "AIESEC Bardo",
    date: "Oct. 2023 – Jul. 2024",
    description:
      "Active member in youth leadership programs and community projects.",
    icon: Users,
  },
  {
    name: "ACM INSAT",
    date: "2022",
    description:
      "Competitive programming member focusing on algorithmic problem-solving.",
    icon: Trophy,
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 animate-fade-in-up">Clubs & Activities</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club, i) => (
          <div 
            key={i} 
            className="bg-card border rounded-xl shadow p-5 flex flex-col gap-2 hover:shadow-xl transition-all duration-500 hover:scale-105 group animate-fade-in-up"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <club.icon className="w-6 h-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{club.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{club.date}</span>
            <p className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">{club.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
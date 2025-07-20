import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "CustomapsxEnsemble",
    location: "Montreal, Canada (Remote)",
    date: "Oct. 2024 – Jan. 2025",
    role: "Software Developer Intern",
    description: [
      "Debugged and optimized legacy PHP/JavaScript codebase, improving stability and performance.",
    ],
    logo: null,
  },
  {
    company: "Hydatis",
    location: "Tunis, Tunisia",
    date: "June 2024 – August 2024",
    role: "Software Developer Intern",
    description: [
      "Developed a dynamic business website using Angular, Spring Boot, and MongoDB.",
      "Implemented Spring Boot unit and integration testing for reliability.",
    ],
    logo: null,
  },
  {
    company: "Marimex",
    location: "Tunis, Tunisia",
    date: "June 2023 – August 2023",
    role: "Software Developer Intern",
    description: [
      "Built a full-stack web app with Angular, Node.js, and MongoDB.",
      "Implemented secure JWT authentication with HTTP-only cookies.",
    ],
    logo: null,
  },
  {
    company: "Tunisair",
    location: "Tunis, Tunisia",
    date: "June 2022",
    role: "Software and Network Intern",
    description: [
      "Automated client email notifications with PHPMailer.",
      "Worked with Cisco routers and networking protocols.",
    ],
    logo: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-3xl py-12 flex flex-col items-center px-4 sm:px-0">
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>
      <ol className="relative border-l border-primary/30">
        {experiences.map((exp, i) => (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary text-background rounded-full ring-8 ring-background">
              <Briefcase className="w-4 h-4" />
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-bold text-lg">{exp.company}</span>
              <span className="text-sm text-muted-foreground">{exp.location} | {exp.date}</span>
            </div>
            <div className="text-base text-muted-foreground font-medium">{exp.role}</div>
            <ul className="list-disc list-inside ml-4 text-base text-muted-foreground">
              {exp.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
} 
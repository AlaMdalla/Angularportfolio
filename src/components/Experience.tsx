import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "FORVIA",
    location: "Tunis, Tunisia",
    date: "Jul. 2025 – Aug. 2025",
    role: "DevOps & Microservices Engineer",
    description: [
      "Designed an internal DevOps tool to validate version changes across 30+ microservices during PRs.",
      "Automated detection of breaking changes using diffs from service versions.json and dependency graphs.",
      "Developed a custom tool using Node.js to compare PR and main branches.",
      "Integrated CI/CD feedback loops using Azure DevOps API, reducing integration failures by 65%.",
      "Technologies: Node.js, Azure DevOps API",
    ],
    logo: null,
  },
  {
    company: "CustomapsxEnsemble",
    location: "Montreal, Canada (Remote)",
    date: "Oct. 2024 – Jan. 2025",
    role: "Software Developer Intern",
    description: [
      "Maintained and documented a legacy PHP project while adding incremental features.",
      "Built MVP prototypes for market validation and hypothesis testing.",
    ],
    logo: null,
  },
  {
    company: "Hydatis",
    location: "Tunis, Tunisia",
    date: "Jun. 2024 – Aug. 2024",
    role: "Software Developer Intern",
    description: [
      "Designed a scalable Payment Microservice using Spring Boot and Angular, applying SOLID and the Strategy design pattern.",
      "Containerized the application using Docker for reuse across company projects.",
    ],
    logo: null,
  },
  {
    company: "Tunisair",
    location: "Tunis, Tunisia",
    date: "Jun. 2022",
    role: "Software and Network Intern",
    description: [
      "Developed email automation using PHPMailer to improve communication efficiency.",
      "Worked with Cisco networking devices and troubleshooting protocols.",
    ],
    logo: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-3xl py-12 flex flex-col items-center px-4 sm:px-0">
      <h2 className="text-3xl font-semibold mb-8 animate-fade-in-up">Experience</h2>
      <ol className="relative border-l border-primary/30">
        {experiences.map((exp, i) => (
          <li 
            key={i} 
            className="mb-10 ml-6 animate-fade-in-left group hover:translate-x-2 transition-transform duration-300"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary text-background rounded-full ring-8 ring-background group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300">
              <Briefcase className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{exp.company}</span>
              <span className="text-sm text-muted-foreground">{exp.location} | {exp.date}</span>
            </div>
            <div className="text-base text-muted-foreground font-medium">{exp.role}</div>
            <ul className="list-disc list-inside ml-4 text-base text-muted-foreground">
              {exp.description.map((d, j) => (
                <li 
                  key={j}
                  className="hover:text-foreground transition-colors duration-300 hover:translate-x-1"
                  style={{ animationDelay: `${(i * 200) + (j * 100)}ms` }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
} 
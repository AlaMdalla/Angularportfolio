import { ExternalLink } from "lucide-react";
import Image from "next/image";
import marimex from "../../public/img/marimex.png";
import accssely from "../../public/img/accssely.png";
import problemSolving from "../../public/img/problem-solving-microservice.jpg";
import game from "../../public/img/time-jumper.jpg";

const projects = [

  {
    title: "Accessly – Personal Project",
    description:
      "Built an access-management platform centralizing authentication, authorization, and policy enforcement. Architected as a monorepo with shared types and UI for consistency across client and server. Frontend uses Next.js (TypeScript) with a secure admin dashboard; backend leverages Supabase (Postgres + Auth) and TypeScript services for token, audit, and policy management. Added Board and Notifications modules (real-time, event-driven pub/sub architecture).",
    tech: ["Next.js", "TypeScript", "Supabase", "Postgres", "Auth", "Realtime"],
    github: "#",
    demo: "https://www.accessly.me",
    image: accssely,
  }, {
    title: "Marimex – Freelance Project",
    description:
      "Rebuilt a multilingual e-commerce site using Next.js 14 with SEO-first rendering and dynamic product routing. Integrated Google One Tap, admin guards, and fully-typed contexts for secure state handling. Delivered a reusable UI kit (dialogs, toasts, sheets), Messenger chat, and a map picker. Optimized performance using server components, lazy loading and code splitting.",
    tech: ["Next.js", "React", "TypeScript", "SEO", "SSR", "UI Kit"],
    github: "#",
    demo: "https://marimexste.com/",
    image: marimex,
  },

  {
    title: "E-Learning & Problem-Solving Platform",
    description:
      "Combined backend and evaluation platform: a Spring Boot E-Learning backend (courses, users, competitions) with MySQL + JPA, MapStruct DTOs and Swagger docs; a Dockerized Problem-Solving microservice for problem creation, submission and automated evaluation (judge integration, sandboxing) designed with SOLID principles; and an analytics component for student performance using ML (KNN, SVM) and clustering to surface insights.",
    tech: ["Spring Boot", "MySQL", "MapStruct", "Docker", "ML", "Microservices"],
    github: "https://github.com/AlaMdalla/E-Learning-backend",
    demo: "#",
    image: problemSolving,
  },

  {
    title: "Superbia — 2D Platformer (C / SDL 1.2)",
    description:
      "2D platformer built in C using SDL 1.2 with custom assets and polished level design. I contributed the background task logic and gameplay polish—this project demonstrates low-level game loop control, memory-conscious asset handling, and responsive input handling. The repo includes a background-task implementation used to offload AI/physics updates for smoother framerate.",
    tech: ["C", "SDL 1.2", "Custom Assets", "photoshop", ],
    github: "https://github.com/ismailbokri/superbia",
    demo: "#",
    image: game,
  },

];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 animate-fade-in-up">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((proj, i) => (
          <div
            key={proj.title}
            className="border rounded-xl bg-card shadow p-5 flex flex-col gap-3 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="w-full h-32 bg-muted rounded mb-2 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300">
              <Image
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{proj.title}</h3>
            <p className="text-sm text-muted-foreground">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tech.map((t, techIndex) => (
                <span
                  key={t}
                  className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${(i * 200) + (techIndex * 50)}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline text-sm hover:text-primary hover:scale-105 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.9 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 1.7.5 1.7 1.1.1 2-.7 2.5-1.1.1-.8.4-1.4.8-1.8-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.4 5.6 18.3.5 12 .5z" />
                </svg>
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline text-sm hover:text-primary hover:scale-105 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
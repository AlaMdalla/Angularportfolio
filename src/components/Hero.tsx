import Image from "next/image";
import { Github, Linkedin, Mail, Phone, Globe, MapPin } from "lucide-react";
import profile from "../../public/img/test.jpg";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-4xl flex flex-col items-center text-center py-16 gap-6 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-2xl opacity-60 animate-pulse" />
      {/* Profile image with bounce animation */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary mx-auto mb-4 shadow-lg animate-bounce-in">
        <Image src={profile} alt="Ala Mdalla" width={144} height={144} priority />
      </div>
      {/* Name and title */}
      <h1 className="text-5xl font-bold tracking-tight animate-slide-in-left">Ala Mdalla</h1>
      <h2 className="text-2xl font-semibold text-primary animate-fade-in-up">Software Engineer</h2>
      {/* Description with typewriter effect */}
      <div className="text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in-up">
        <TypewriterText 
          text="Full-stack engineer passionate about DevOps, microservices, and building robust, scalable solutions. Experienced in Java, Node.js, Angular, and cloud-native tools."
          speed={50}
          delay={1000}
          className="text-xl text-muted-foreground"
        />
      </div>
      {/* Contact info */}
      <div className="flex flex-wrap justify-center gap-4 mt-2 animate-fade-in-up animate-delay-300">
        <a href="mailto:alamdalla@proton.me" aria-label="Email" className="hover:scale-110 transition-transform duration-200 flex items-center gap-1"><Mail className="w-6 h-6 hover:text-primary" /><span className="hidden sm:inline">alamdalla@proton.me</span></a>
        <a href="tel:+21628719397" aria-label="Phone" className="hover:scale-110 transition-transform duration-200 flex items-center gap-1"><Phone className="w-6 h-6 hover:text-primary" /><span className="hidden sm:inline">+216 28 719 397</span></a>
        <a href="https://alamdalla.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:scale-110 transition-transform duration-200 flex items-center gap-1"><Globe className="w-6 h-6 hover:text-primary" /><span className="hidden sm:inline">alamdalla.vercel.app</span></a>
        <span className="flex items-center gap-1"><MapPin className="w-6 h-6 text-primary" /><span className="hidden sm:inline">Tunis, Tunisia</span></span>
        <a href="https://github.com/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform duration-200"><Github className="w-6 h-6 hover:text-primary" /></a>
        <a href="https://linkedin.com/in/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-200"><Linkedin className="w-6 h-6 hover:text-primary" /></a>
      </div>
      {/* Resume button with slide-up animation */}
      <a
        href="/files/Ala_Mdalla_Resume2.pdf"
        download
        className="mt-4 inline-block px-6 py-2 rounded-full bg-primary text-background font-semibold shadow hover:bg-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-up animate-delay-500"
      >
        Download Resume
      </a>
    </section>
  );
} 
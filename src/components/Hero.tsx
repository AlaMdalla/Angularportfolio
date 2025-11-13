import Image from "next/image";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
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
        <a href="https://github.com/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.9 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 1.7.5 1.7 1.1.1 2-.7 2.5-1.1.1-.8.4-1.4.8-1.8-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.4 5.6 18.3.5 12 .5z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452H17.2V14.8c0-1.343-.026-3.074-1.874-3.074-1.875 0-2.162 1.463-2.162 2.976v5.75H9.14V9h3.066v1.56h.043c.427-.81 1.472-1.666 3.03-1.666 3.239 0 3.838 2.132 3.838 4.904v6.194zM5.337 7.433a1.783 1.783 0 11.001-3.565 1.783 1.783 0 01-.001 3.565zM6.964 20.452H3.708V9h3.256v11.452z"/>
          </svg>
        </a>
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
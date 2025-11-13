import { Mail, MapPin, Github, Linkedin, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 animate-fade-in-up">Contact</h2>
      <form className="w-full max-w-lg bg-card border rounded-xl shadow p-6 flex flex-col gap-4 mb-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up animate-delay-200">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-colors duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary/50 transition-colors duration-300"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] hover:border-primary/50 transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-primary text-background font-semibold rounded px-6 py-2 hover:bg-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-up animate-delay-400">
        <div className="flex gap-3 mb-2">
          <a 
            href="mailto:alamdalla@proton.me" 
            aria-label="Email"
            className="hover:scale-110 hover:rotate-12 transition-all duration-300 flex items-center gap-1"
          >
            <Mail className="w-5 h-5 hover:text-primary" />
            <span className="hidden sm:inline">alamdalla@proton.me</span>
          </a>
          <a 
            href="tel:+21628719397" 
            aria-label="Phone"
            className="hover:scale-110 hover:rotate-12 transition-all duration-300 flex items-center gap-1"
          >
            <Phone className="w-5 h-5 hover:text-primary" />
            <span className="hidden sm:inline">+216 28 719 397</span>
          </a>
          <a 
            href="https://alamdalla.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Website"
            className="hover:scale-110 hover:rotate-12 transition-all duration-300 flex items-center gap-1"
          >
            <Globe className="w-5 h-5 hover:text-primary" />
            <span className="hidden sm:inline">alamdalla.vercel.app</span>
          </a>
          <a 
            href="https://github.com/alamdalla" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            <Github className="w-5 h-5 hover:text-primary" />
          </a>
          <a 
            href="https://linkedin.com/in/alamdalla" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 hover:text-primary" />
          </a>
        </div>
        <div className="flex items-center gap-1 hover:text-foreground transition-colors duration-300">
          <MapPin className="w-4 h-4" /> Tunis, Tunisia
        </div>
        <p className="text-xs hover:text-foreground transition-colors duration-300">© {new Date().getFullYear()} Ala Mdalla</p>
      </div>
    </section>
  );
} 
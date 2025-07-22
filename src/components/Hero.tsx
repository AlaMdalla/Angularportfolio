import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import profile from "../../public/img/test.jpg";

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-4xl flex flex-col items-center text-center py-16 gap-6 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-2xl opacity-60" />
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary mx-auto mb-4 shadow-lg">
        <Image src={profile} alt="Ala Mdalla" width={144} height={144} priority />
      </div>
      <h1 className="text-5xl font-bold tracking-tight">Ala Mdalla</h1>
      <p className="text-xl text-muted-foreground max-w-xl mx-auto">
        Software Engineering Student & Full-Stack Developer. Passionate about building robust, scalable, and user-friendly applications.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <a href="mailto:alamdalla@proton.me" aria-label="Email"><Mail className="w-6 h-6 hover:text-primary" /></a>
        <a href="https://github.com/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-6 h-6 hover:text-primary" /></a>
        <a href="https://linkedin.com/in/alamdalla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-6 h-6 hover:text-primary" /></a>
      </div>
      <a
  href="/files/Ala_Mdalla_Resume-1.pdf"
  download
  className="mt-4 inline-block px-6 py-2 rounded-full bg-primary text-background font-semibold shadow hover:bg-primary/80 transition-colors"
>
  Download Resume
</a>

        
    </section>
  );
} 

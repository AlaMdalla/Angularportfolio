"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Clubs", href: "#clubs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Simple dark mode toggle (for demo, replace with theme provider for production)
  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return next;
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border flex items-center justify-between px-4 sm:px-12 py-3 animate-slide-in-down">
      <div className="flex items-center gap-2 font-bold text-lg animate-fade-in-left">
        <span className="text-primary hover:scale-105 transition-transform duration-200">Ala Mdalla</span>
      </div>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-primary transition-all duration-300 font-medium relative group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/alamdalla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform duration-200 hover:rotate-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.9 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 1.7.5 1.7 1.1.1 2-.7 2.5-1.1.1-.8.4-1.4.8-1.8-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.4 5.6 18.3.5 12 .5z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/alamdalla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200 hover:rotate-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452H17.2V14.8c0-1.343-.026-3.074-1.874-3.074-1.875 0-2.162 1.463-2.162 2.976v5.75H9.14V9h3.066v1.56h.043c.427-.81 1.472-1.666 3.03-1.666 3.239 0 3.838 2.132 3.838 4.904v6.194zM5.337 7.433a1.783 1.783 0 11.001-3.565 1.783 1.783 0 01-.001 3.565zM6.964 20.452H3.708V9h3.256v11.452z"/>
          </svg>
        </a>
        <button
          onClick={toggleDark}
          className="ml-2 p-2 rounded hover:bg-muted transition-all duration-300 hover:scale-110 hover:rotate-180"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
} 
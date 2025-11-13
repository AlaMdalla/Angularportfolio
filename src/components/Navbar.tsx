"use client";
import Link from "next/link";
import { useState } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";

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
      if (!d) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return !d;
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
          <Github className="w-5 h-5 hover:text-primary" />
        </a>
        <a 
          href="https://linkedin.com/in/alamdalla" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200 hover:rotate-12"
        >
          <Linkedin className="w-5 h-5 hover:text-primary" />
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
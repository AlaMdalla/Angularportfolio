import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Clubs from "../components/Clubs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-0 sm:px-0">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Clubs />
        <Contact />
      </main>
    </div>
  );
}

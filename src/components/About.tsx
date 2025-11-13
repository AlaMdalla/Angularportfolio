export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 animate-fade-in-up">About</h2>
      <div className="bg-card border rounded-xl shadow p-6 w-full flex flex-col gap-4 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up animate-delay-200">
        <div className="hover:translate-x-2 transition-transform duration-300">
          <h3 className="font-bold text-lg mb-1 hover:text-primary transition-colors duration-300">Education</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li className="hover:text-foreground transition-colors duration-300 hover:translate-x-1">
              <span className="font-semibold">ESPRIT</span> – Bachelor’s in Software Engineering (Sep. 2021 – Jun. 2026)
            </li>
          </ul>
        </div>
        <div className="hover:translate-x-2 transition-transform duration-300">
          <h3 className="font-bold text-lg mb-1 hover:text-primary transition-colors duration-300">Profile</h3>
          <p className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300">
            I am a full-stack software engineer passionate about DevOps, microservices, and building robust, scalable solutions. Experienced in Java, Node.js, Angular, and cloud-native tools. Always eager to learn and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
} 
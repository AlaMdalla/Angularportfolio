const skills = {
  Languages: ["Java", "JavaScript/TypeScript", "PHP", "C/C++", "Python", "SQL"],
  Frameworks: ["Spring Boot", "Angular", "Node.js", "React", "Qt", "Flask"],
  "Tools/DBs": ["Docker", "Git", "CI/CD", "Linux", "JWT", "REST", "MongoDB", "MySQL", "pandas", "NumPy"],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 animate-fade-in-up">Skills</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items], groupIndex) => (
          <div 
            key={group} 
            className="bg-card border rounded-xl shadow p-5 flex flex-col gap-3 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group"
            style={{ animationDelay: `${groupIndex * 200}ms` }}
          >
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, itemIndex) => (
                <span 
                  key={item} 
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                  style={{ animationDelay: `${(groupIndex * 200) + (itemIndex * 50)}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
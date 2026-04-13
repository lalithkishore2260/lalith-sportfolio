import { Code2, Globe, Database, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "Java", "C", "JavaScript"],
      description: "Actively improving algorithmic thinking and code optimization",
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js"],
      description: "Skilled in creating responsive & user-focused web apps",
    },
    {
      icon: Database,
      title: "Tools & Databases",
      skills: ["Git", "VS Code", "MySQL", "Postman", "Figma"],
      description: "Proficient with modern development and design tools",
    },
    {
      icon: Sparkles,
      title: "Tech Interests",
      skills: ["API Integration", "Authentication", "Power BI", "Salesforce"],
      description: "Exploring enterprise technologies and data visualization",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground font-inter mb-16 max-w-2xl mx-auto">
          Continuously expanding my technical toolkit through hands-on projects and self-learning
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glassmorphism p-8 rounded-2xl hover:shadow-glow-blue transition-smooth hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-smooth">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-inter hover:bg-primary/20 transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground font-inter italic mt-4 border-l-2 border-primary pl-4">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

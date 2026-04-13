import { GraduationCap, Heart, Code, Users } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code, label: "Coding", description: "Building solutions that matter" },
    { icon: Heart, label: "UI Design", description: "Creating beautiful interfaces" },
    { icon: GraduationCap, label: "Problem Solving", description: "Tackling challenges head-on" },
    { icon: Users, label: "Team Collaboration", description: "Growing together" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glassmorphism p-8 rounded-2xl space-y-6 hover:shadow-glow-blue transition-smooth">
            <p className="text-lg text-foreground/90 font-inter leading-relaxed">
              I am currently pursuing <span className="text-primary font-semibold">B.Tech Information Technology</span> with 
              a strong passion for software development and hands-on learning. I enjoy solving real-world problems, 
              exploring new technologies, and continuously improving through self-learning, collaboration, and curiosity.
            </p>
            <p className="text-lg text-foreground/90 font-inter leading-relaxed">
              I believe technology can create impact, and I'm working towards being one of those creators. 
              Each project teaches me something new, every challenge makes me stronger, and every collaboration 
              expands my perspective.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-poppins mb-6 text-primary">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-xl font-semibold font-poppins">B.Tech Information Technology</h4>
                <p className="text-muted-foreground font-inter">Currently Pursuing</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Personal Interests</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <div
                    key={index}
                    className="glassmorphism p-6 rounded-xl hover:shadow-glow-purple transition-smooth hover:scale-105 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold font-poppins mb-2">{interest.label}</h4>
                        <p className="text-muted-foreground font-inter">{interest.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

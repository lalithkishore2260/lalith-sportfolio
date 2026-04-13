import { Trophy, Award, Target, Zap, Star, Code } from "lucide-react";
import { Button } from "./ui/button";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "100 Python Programming Challenges",
      description: "Completed comprehensive Python programming challenges, strengthening problem-solving skills",
    },
    {
      icon: Trophy,
      title: "2nd Prize at Webzilla 2.0",
      description: "Web Development Competition - Recognized for creating innovative web solutions",
    },
    {
      icon: Target,
      title: "Captcha-Free Security System",
      description: "Developed innovative honeypot-based security defense for login systems",
    },
    {
      icon: Zap,
      title: "VIT Bhopal Hackathon Participant",
      description: "2-Day Hackathon - Built Smart Health Monitoring Website under time constraints",
    },
    {
      icon: Star,
      title: "Salesforce Internship Excellence",
      description: "Excellent Performance in Event Registration Management System development",
    },
    {
      icon: Award,
      title: "NxtWave Award of Appreciation",
      description: "Recognized for outstanding contribution to the learning community",
    },
    {
      icon: Award,
      title: "Responsive Web Design Certified",
      description: "Completed comprehensive certification in responsive web design principles",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4 gradient-text">
          Achievements
        </h2>
        <p className="text-center text-muted-foreground font-inter mb-16 max-w-2xl mx-auto">
          Milestones that mark my journey of continuous learning and growth
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover:shadow-glow-blue transition-smooth hover:translate-x-2 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-primary transition-smooth">
                      {achievement.title}
                    </h3>
                    <p className="text-foreground/80 font-inter">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="glassmorphism hover:shadow-glow-purple transition-smooth"
          >
            Download Achievements Certificate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

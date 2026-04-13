import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, ChevronDown } from "lucide-react";
import heroCoverBg from "@/assets/hero-cover-bg.jpg";
import profilePhoto from "@/assets/imga9.jpg";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Developer", "Tech Explorer", "Problem Solver", "Continuous Learner"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroCoverBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background" />
      </div>

      {/* Large background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2
          className="font-poppins font-black text-[clamp(4rem,18vw,16rem)] leading-none tracking-tighter text-white/[0.04] whitespace-nowrap"
        >
          FULL STACK
        </h2>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Photo frame */}
        <div className="relative mx-auto mb-8 w-40 h-40 md:w-52 md:h-52">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/50 via-orange-500/30 to-purple-500/30 blur-sm" />
          <div className="relative w-full h-full rounded-2xl bg-muted/30 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
  <img
  src={profilePhoto}
  alt="Lalith Kishore J"
  className="w-full h-full bg-cover"
/>
</div>
        </div>

        {/* Name */}
        <h1 className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
          <span className="text-foreground">Lalith</span>{" "}
          <span className="text-primary">Kishore J</span>
        </h1>

        {/* Role title - thin font, low opacity */}
        <p className="font-poppins font-extralight text-xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-white/30 mb-3">
          Full Stack Developer
        </p>

        {/* Cycling role */}
        <div className="h-8 flex items-center justify-center mb-6">
          <span className="text-sm md:text-base font-inter tracking-[0.3em] uppercase text-primary/70 animate-fade-in">
            {roles[currentRole]}
          </span>
        </div>

        {/* Location */}
        <p className="text-sm text-muted-foreground font-inter mb-10">
          based in India · Building meaningful technology
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
  size="lg"
  className="rounded-full px-8 bg-primary/90 hover:bg-primary text-primary-foreground transition-smooth group shadow-lg shadow-primary/20"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Lalith_Kishore_J_Resume.pdf";
    link.click();
  }}
>
  <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-smooth" />
  Download Resume
</Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white/15 text-foreground hover:bg-white/10 transition-smooth"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
        </div>

        {/* Quote */}
        <p className="text-xs text-white/20 font-inter italic tracking-wider">
          "Keep Learning · Technology creates impact · Every bug fixed is a lesson earned"
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
};

export default Hero;

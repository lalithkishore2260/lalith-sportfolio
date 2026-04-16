import { ExternalLink, Github, BarChart3, Receipt, Train, Building2, Landmark, HeartPulse } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Tamil Nadu Brick Price Forecasting System",
      tagline: "Data-driven analytics dashboard for construction pricing",
      description: "Predicts brick prices across 36 districts using simulated pricing models, seasonal trends, and logistics cost calculations. Includes interactive tables, charts, and a shipping cost calculator with GST integration.",
      features: [
        "District-wise price prediction for 36 districts",
        "Seasonal trend analysis & visualization",
        "Shipping cost calculator with GST",
        "Interactive charts & data tables",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Data Modeling"],
      icon: BarChart3,
      accentClass: "text-blue-400",
      borderClass: "hover:border-blue-500/40",
      github: "https://github.com/lalithkishore2260/brick-price-predictor",
      demo: null,
    },
    {
      title: "GST Billing & Analytics Platform",
      tagline: "Full-stack billing system for small-scale industries",
      description: "GST-compliant billing system featuring automated invoice generation (CGST/SGST/IGST), real-time analytics, inventory management with HSN codes, multi-user dashboards, and PDF export.",
      features: [
        "Automated CGST/SGST/IGST invoice generation",
        "Real-time revenue & tax analytics",
        "Inventory management with HSN codes",
        "Multi-user dashboards & PDF export",
      ],
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      icon: Receipt,
      accentClass: "text-emerald-400",
      borderClass: "hover:border-emerald-500/40",
      github: "https://github.com/lalithkishore2260/bizegrow/tree/main/bizgrow-billing-ad90aaae-main",
      demo: null,
    },
    {
      title: "IRCTC Train Booking System Clone",
  tagline: "Captcha-free secure railway booking web application",
  description: "A modern IRCTC-style railway booking system with captcha-free authentication using OTP verification and intelligent behavioral tracking to prevent bots. Includes train search, ticket booking, payment simulation, and a complete user dashboard.",
  features: [
    "Captcha-free login using OTP verification",
    "Behavioral tracking for anti-bot detection",
    "IRCTC-style user ID generation & secure sessions",
    "Train search with filters & seat availability",
    "Payment simulation & PNR generation",
    "User dashboard with booking history",
  ],
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "JWT", "LocalStorage"],
  icon: Train,
  accentClass: "text-orange-400",
  borderClass: "hover:border-orange-500/40",
      github: "https://github.com/lalithkishore2260/Reverse_eng",
      demo: null,
    },
    {
      title: "R.V. Wire Cut Bricks Business Website",
      tagline: "Professional website for a construction company",
      description: "Business website with product catalog, dynamic pricing calculator based on location and climate, and transport cost estimation. Includes responsive design and WhatsApp integration.",
      features: [
        "Product catalog with specifications",
        "Dynamic pricing calculator (location & climate)",
        "Transport cost estimation tool",
        "WhatsApp integration for inquiries",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: Building2,
      accentClass: "text-amber-400",
      borderClass: "hover:border-amber-500/40",
      github: "#",
      demo: "https://rv-bricks.vercel.app/",
    },
    {
      title: "Sri Karpaga Vinyagar Chits — Account Manager",
      tagline: "Role-based financial management system",
      description: "Employees track transactions while owners monitor collections, transfers, and analytics. Features PDF/Excel export and audit logs with role-based access control.",
      features: [
        "Role-based access (Employee & Owner)",
        "Transaction tracking & collection monitoring",
        "PDF/Excel export & audit logs",
        "Analytics dashboard for financial insights",
      ],
      tech: ["React", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
      icon: Landmark,
      accentClass: "text-violet-400",
      borderClass: "hover:border-violet-500/40",
      github: "#",
      demo: "https://sri-karpaga-chits-manager.vercel.app/",
    },
    {
      title: "Smart Health Monitoring System",
      tagline: "Full-stack healthcare platform with multiple roles",
      description: "Healthcare platform with Admin, Doctor, and Patient roles. Features appointment booking, medical report workflows, AI chatbot, real-time health metrics, blog system, and notifications.",
      features: [
        "Multi-role access (Admin, Doctor, Patient)",
        "Appointment booking & medical reports",
        "AI chatbot & real-time health metrics",
        "Blog system & push notifications",
      ],
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "AI Integration"],
      icon: HeartPulse,
      accentClass: "text-rose-400",
      borderClass: "hover:border-rose-500/40",
      github: "https://github.com/lalithkishore2260/digitalhealthrecordwallet",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground font-inter mb-16 max-w-2xl mx-auto">
          Real-world applications solving practical business problems — from billing platforms to healthcare systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`glassmorphism p-6 rounded-2xl border border-transparent ${project.borderClass} transition-smooth hover:scale-[1.02] group flex flex-col`}
                style={{ "--animation-delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-muted/50 ${project.accentClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-poppins leading-tight group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs font-inter font-medium mb-3 ${project.accentClass}`}>
                  {project.tagline}
                </p>

                <p className="text-foreground/70 font-inter text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4 flex-grow">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground font-inter flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-0.5 bg-muted rounded-md text-[10px] font-inter text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-border">
  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${project.demo ? 'flex-1' : 'w-full'}`}>
    <Button size="sm" variant="outline" className="w-full group/btn">
      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-smooth" />
      Code
    </Button>
  </a>
  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
      <Button size="sm" className="w-full group/btn">
        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-smooth" />
        Live
      </Button>
    </a>
  )}
</div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

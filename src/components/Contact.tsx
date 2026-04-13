import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
  label: "Email",
  href: "mailto:jlalithkishore11@gmail.com",
  color: "hover:text-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lalith-kishore-a40949296/",
      color: "hover:text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lalithkishore2260",
      color: "hover:text-primary",
    },
    {
  icon: MessageCircle,
  label: "WhatsApp",
  href: "https://wa.me/916374404024",
  color: "hover:text-secondary",
},
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4 gradient-text">
          Let's Connect
        </h2>
        <p className="text-center text-foreground/80 font-inter mb-16 max-w-2xl mx-auto text-lg">
          I am always open to collaborations, project opportunities, internships, and tech discussions. 
          Let's build something impactful together!
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-inter mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glassmorphism"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-inter mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glassmorphism"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-inter mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glassmorphism min-h-[150px]"
                  placeholder="Let's discuss your project..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full group"
                size="lg"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-smooth" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-poppins mb-6">Connect with Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 glassmorphism rounded-xl transition-smooth hover:scale-105 ${link.color} group`}
                    >
                      <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-inter text-lg">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl text-center">
              <p className="text-muted-foreground font-inter italic">
                "Technology creates impact"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

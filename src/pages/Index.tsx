
import { Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-background/80 z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-semibold">Portfolio</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hello, I'm Bruno Almeida
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A passionate Cloud Security Solutions Architect.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-foreground/80 mb-6">
              As a Cloud Security Solutions Architect at Palo Alto Networks, I help organizations confidently secure their cloud environments without slowing down innovation.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              I specialize in bridging the gap between cloud-native architecture and robust security - designing scalable, compliant, and automated solutions that align with business goals. With deep expertise in cloud platforms, DevSecOps, and infrastructure as code, I bring a proactive, solutions-driven mindset to every challenge.
            </p>
            <p className="text-lg text-foreground/80">
              What sets me apart? I speak both “security” and “cloud,” translating complex risks into actionable strategies that teams can easily trust and implement.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Understanding Modern Web Development</h3>
              <p className="text-foreground/70 mb-4">
                Exploring the latest trends and best practices in web development...
              </p>
              <span className="text-sm text-accent">Posted on March 15, 2024</span>
            </article>
            <article className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">The Future of AI in Tech</h3>
              <p className="text-foreground/70 mb-4">
                Discussing the impact of artificial intelligence on modern technology...
              </p>
              <span className="text-sm text-accent">Posted on March 10, 2024</span>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Interested in connecting? Feel free to reach out through any of these platforms.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/bmppa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bmppa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/bmppa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

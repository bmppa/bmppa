
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Project One",
    description: "A sophisticated web application",
    image: "/placeholder.svg",
    link: "#",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    title: "Project Two",
    description: "Mobile-first design system",
    image: "/placeholder.svg",
    link: "#",
    tags: ["Design", "UI/UX", "Mobile"]
  },
  {
    title: "Project Three",
    description: "Enterprise software solution",
    image: "/placeholder.svg",
    link: "#",
    tags: ["Node.js", "MongoDB", "AWS"]
  }
];

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
              <a href="#projects" className="nav-link">Projects</a>
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
              Creating Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Full-stack developer crafting beautiful and functional web applications
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="project-card glass-card p-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I'm a passionate developer focused on creating intuitive and efficient web solutions. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-lg text-foreground/80">
              My approach combines technical excellence with user-centered design principles, ensuring that every project not only functions flawlessly but also delivers an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Interested in working together? Let's connect and discuss your next project.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import React from "react";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import TechStackVisualization from "./TechStackVisualization";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
  // Mock data for professional links
  const professionalLinks = {
    linkedin: "https://www.linkedin.com/in/cadefarragut/",
    github: "https://github.com/cadefarragut",
    resume: "../../resources/resume.pdf",
    email: "cade_farragut@yahoo.com",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Cade Farragut</div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={professionalLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={professionalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={professionalLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <Button variant="ghost" size="icon">
                <FileText className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-20">
        {/* Hero Section */}
        <section id="about" className="py-10">
          <HeroSection />
        </section>

        <Separator />

        {/* Projects Gallery */}
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <ProjectsGallery />
        </section>

        <Separator />

        {/* Experience & Tech Stack */}
        <section id="experience" className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experience & Skills
          </h2>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl font-medium">Senior Developer</h4>
                  <div className="text-muted-foreground">
                    Jan 2020 - Present
                  </div>
                </div>
                <div className="text-lg mb-2">Company Name</div>
                <p className="text-muted-foreground">
                  Led development of key features for enterprise applications.
                  Mentored junior developers and implemented best practices for
                  code quality and performance optimization.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl font-medium">Web Developer</h4>
                  <div className="text-muted-foreground">
                    Mar 2017 - Dec 2019
                  </div>
                </div>
                <div className="text-lg mb-2">Previous Company</div>
                <p className="text-muted-foreground">
                  Developed responsive web applications using modern JavaScript
                  frameworks. Collaborated with design team to implement UI/UX
                  improvements and optimize site performance.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <TechStackVisualization />
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you'd like to connect!
            </p>

            <div className="flex justify-center gap-4">
              <a href={`mailto:${professionalLinks.email}`}>
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Button>
              </a>
              <a
                href={professionalLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={professionalLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href={professionalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a href={`mailto:${professionalLinks.email}`} aria-label="Email">
              <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

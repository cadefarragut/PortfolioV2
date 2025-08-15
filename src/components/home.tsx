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
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Experience
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

              <div className="space-y-12">
                {/* Experience Item 1 */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                  <div className="md:ml-20 bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                          Systems Software Engineer
                        </h4>
                        <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Hewlett Packard Enterprise
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                        Jun 2025 - Present
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I develop and maintain firmware for HPE iLO, a dedicated
                      management interface that operates independently of the
                      server's primary hardware and operating system, enabling
                      full remote administration at all times. Our team manages
                      bugs and tasks through the JIRA ticketing system and uses
                      active sprints to track progress and meet deadlines. I
                      work closely with hardware and software engineering teams
                      to identify root causes and implement solutions through
                      hands-on debugging, testing, and validation.
                    </p>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary/70 rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                  <div className="md:ml-20 bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                          Software Engineering Intern
                        </h4>
                        <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Hewlett Packard Enterprise
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                        May 2024 - Aug 2024
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I developed a Python script in Eclipse that integrated
                      Redfish REST API and Postman Software to automate server
                      testing for HPE's iLO chip. I was responsible for running
                      daily test passes, diagnosing failures, and identifying
                      bugs in recent code merges. At the end of my 12-week
                      internship, I presented my work at the HPE intern project
                      fair.
                    </p>
                  </div>
                </div>

                {/* Experience Item 3 */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                  <div className="md:ml-20 bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                          Firmware Tester and Developer Intern
                        </h4>
                        <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Hewlett Packard Enterprise
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                        May 2023 - Aug 2023
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                    I ran daily tests on HPE's ROM chip, which stores the BIOS on Synergy server blades, 
                    and diagnosed bugs that prevented the servers from booting into the OS. 
					          I validated recent code merges before firmware updates were released to customers, 
                    ensuring proper boot functionality across Windows, Linux (Red Hat and SUSE), and VMware ESXi.
					          At the end of my internship, I presented my work at the HPE intern project fair.
                    </p>
                  </div>
                </div>

                {/* Experience Item 4 */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

                  <div className="md:ml-20 bg-gradient-to-br from-card to-card/80 rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-foreground mb-2">
                          Senior IT Lead
                        </h4>
                        <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Louisiana State University IT
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                        May 2023 - May 2024
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                    Managed a team of five Technical Support Agents, conducted ticket reviews and weekly call evaluations for quality assurance, and trained over five new hires for the Technical Support Agent role.
                    Resolved over 1,000 technical issues for LSU students, faculty, and staff through phone calls, in-person walkups, live chats, and emails. 
                    </p>
                  </div>
                </div>

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
              Feel free to reach out if you'd like to connect!
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
            © {new Date().getFullYear()} Cade Farragut. All rights reserved.
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

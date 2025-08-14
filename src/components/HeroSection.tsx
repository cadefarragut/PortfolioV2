import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  biography?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  profileImageUrl?: string;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  biography = "Passionate developer with expertise in building modern web applications. Focused on creating elegant solutions to complex problems with clean, maintainable code.",
  resumeUrl = "#",
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com",
  profileImageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
}: HeroSectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {name}
              </h1>
              <p className="text-xl text-muted-foreground">{title}</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {biography}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/20 rounded-full blur-3xl opacity-20"></div>
              <img
                alt="Profile"
                className="mx-auto aspect-square overflow-hidden rounded-full border object-cover object-center sm:w-full lg:w-[400px]"
                src={profileImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

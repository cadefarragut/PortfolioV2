import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import bartenderImage from "../assets/Screenshot 2025-08-14 205344.jpg";
import portrfolioImage from "../assets/projpic.jpg";
import discordbotimage from "../assets/qvWRYXQguGXtwW5tUR6Rw9-1200-80.png"

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectsGalleryProps {
  projects?: Project[];
}

const ProjectsGallery = ({
  projects = defaultProjects,
}: ProjectsGalleryProps) => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.flatMap((project) => project.technologies))),
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section className="py-16 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my recent work and personal projects. Each project
          demonstrates different skills and technologies.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// Default projects data for when no props are provided
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Automated Bartender",
    description:
      "An Automated Bartender built with an Allen Bradley PLC and HMI Touchscreen Interface.",
    technologies: ["Ladder Logic", "Studio 5000", "EtherNet/IP"],
    imageUrl:
      bartenderImage,
    demoUrl: "https://github.com/cadefarragut/Automated-Bartender",
    repoUrl: "https://github.com/cadefarragut/Automated-Bartender",
  },
  {
    id: "2",
    title: "LeetifyTracker",
    description:
      "A Discord bot that automatically tracks members’ monthly activity and generates a dynamic leaderboard to showcase top performers.",
    technologies: ["TypeScript", "Leetify API", "JSON"],
    imageUrl:
      discordbotimage,
    demoUrl: "https://github.com/cadefarragut/LeetifyDiscordBot",
    repoUrl: "https://github.com/cadefarragut/LeetifyDiscordBot",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "Tailwind"],
    imageUrl:
      portrfolioImage,
    demoUrl: "https://cadefarragut.com",
    repoUrl: "https://github.com/cadefarragut/PortfolioV2",
  },
];

export default ProjectsGallery;

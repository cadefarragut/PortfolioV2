import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

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
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/portfolio",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    demoUrl: "https://example.com/ecommerce",
    repoUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data using a third-party API.",
    technologies: ["JavaScript", "API", "CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    demoUrl: "https://example.com/weather",
    repoUrl: "https://github.com/example/weather-app",
  },
  {
    id: "4",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, with drag-and-drop functionality and user authentication.",
    technologies: ["React", "Firebase", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    demoUrl: "https://example.com/tasks",
    repoUrl: "https://github.com/example/task-manager",
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard that visualizes social media metrics and engagement statistics.",
    technologies: ["Vue.js", "D3.js", "Node.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demoUrl: "https://example.com/dashboard",
    repoUrl: "https://github.com/example/social-dashboard",
  },
  {
    id: "6",
    title: "Recipe Finder App",
    description:
      "A mobile-responsive application that allows users to search for recipes based on ingredients they have.",
    technologies: ["JavaScript", "API", "CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    demoUrl: "https://example.com/recipes",
    repoUrl: "https://github.com/example/recipe-finder",
  },
];

export default ProjectsGallery;

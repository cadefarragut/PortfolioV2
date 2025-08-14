import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "This is a sample project description that explains what the project is about and what technologies were used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoUrl = "https://example.com",
  repoUrl = "https://github.com/username/repo",
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg bg-card">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        {demoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
        )}

        {repoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={14} />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

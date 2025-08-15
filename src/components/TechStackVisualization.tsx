import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechItem {
  name: string;
  icon: string;
  proficiency: number; // 1-100
  category: "language" | "framework" | "tools" | "database";
}

interface TechStackVisualizationProps {
  techItems?: TechItem[];
}

const defaultTechItems: TechItem[] = [
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    proficiency: 90,
    category: "language",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    proficiency: 85,
    category: "language",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    proficiency: 75,
    category: "language",
  },
  {
    name: "JIRA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    proficiency: 65,
    category: "tools",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    proficiency: 65,
    category: "tools",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 85,
    category: "tools",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    proficiency: 85,
    category: "tools",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 80,
    category: "language",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 80,
    category: "language",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 80,
    category: "framework",
},
];

const TechStackVisualization: React.FC<TechStackVisualizationProps> = ({
  techItems = defaultTechItems,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = ["all", "language", "framework", "tool"]; //, "database"];

  const filteredTechItems =
    activeCategory === "all"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technical Skills
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {filteredTechItems.map((tech) => (
            <TooltipProvider key={tech.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className="flex flex-col items-center justify-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: hoveredTech === tech.name ? 1.1 : 1,
                      y: hoveredTech === tech.name ? -5 : 0,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-card rounded-xl shadow-md p-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <p className="font-medium">{tech.name}</p>
                    <div className="w-full bg-secondary h-2 rounded-full mt-1">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                    <p className="text-xs mt-1">
                      {tech.proficiency}% proficiency
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackVisualization;

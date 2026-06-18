import {
  Code2,
  Palette,
  Cpu,
  GitBranch,
  Zap,
  Sparkles,
  FileCode,
} from "lucide-react";
import type { Skill } from "@/utils/types";

export const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Code2 size={24} />,
    description:
      "Building responsive and interactive user interfaces with modern web technologies",
    technologies: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
    color: "emerald",
    level: 95,
  },
  {
    name: "React Ecosystem",
    icon: <FileCode size={24} />,
    description:
      "Creating production-grade applications with React and related technologies",
    technologies: [
      "React.js",
      "React Hooks",
      "Context API",
      "Redux",
      "React Router",
    ],
    color: "sky",
    level: 90,
  },
  {
    name: "Next.js Framework",
    icon: <Zap size={24} />,
    description:
      "Developing optimized server-side rendered and static React applications",
    technologies: [
      "Next.js",
      "App Router",
      "Server Components",
      "API Routes",
      "SSR/SSG",
    ],
    color: "purple",
    level: 85,
  },
  {
    name: "TypeScript",
    icon: <Code2 size={24} />,
    description:
      "Implementing type-safe, maintainable JavaScript code for enterprise applications",
    technologies: ["TypeScript", "Interfaces", "Type Guards"],
    color: "blue",
    level: 88,
  },
  {
    name: "Animation & Interaction",
    icon: <Sparkles size={24} />,
    description:
      "Creating high-performance animations and engaging user experiences",
    technologies: ["GSAP", "Framer Motion"],
    color: "amber",
    level: 92,
  },
  {
    name: "UI Design Systems",
    icon: <Palette size={24} />,
    description:
      "Implementing scalable design systems and component libraries",
    technologies: ["Tailwind CSS", "Responsive Design"],
    color: "pink",
    level: 95,
  },
  {
    name: "API Integration",
    icon: <Cpu size={24} />,
    description:
      "Skilled in integrating RESTful APIs using Axios for efficient data fetching.",
    technologies: ["RESTful APIs", "Axios", "Authentication"],
    color: "red",
    level: 80,
  },
  {
    name: "Development Workflow",
    icon: <GitBranch size={24} />,
    description:
      "Managing professional development workflows and team collaboration",
    technologies: ["Git", "GitLab", "GitHub"],
    color: "green",
    level: 90,
  },
];

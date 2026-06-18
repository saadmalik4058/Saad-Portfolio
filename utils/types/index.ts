import type React from "react";

// Projects
export interface Screenshot {
  url: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  screenshots: Screenshot[];
  technologies: string[];
  demo?: string;
}

// Skills
export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
  color: string;
  level?: number;
}

export interface SkillColorClasses {
  bg: string;
  text: string;
  border: string;
  progress: string;
  shadow: string;
}

// Timeline
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  contributions: string[];
}

// Hero particle field
export interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  direction: number;
  opacity: number;
}

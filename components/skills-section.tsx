"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Palette,
  Cpu,
  GitBranch,
  Zap,
  Sparkles,
  FileCode,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
  color: string;
  level?: number;
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const skills: Skill[] = [
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
      technologies: [
        "RESTful APIs",
        "Axios",
        "Authentication"
            ],
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        headingRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".skill-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".skill-progress-bar",
        { width: 0 },
        {
          width: "var(--progress-width)",
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = document.querySelectorAll(".skill-card");
      // cards.forEach((card: any) => {
      //   card.addEventListener("mouseenter", () => {
      //     gsap.to(card, {
      //       y: -8,
      //       scale: 1.02,
      //       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });

      //   card.addEventListener("mouseleave", () => {
      //     gsap.to(card, {
      //       y: 0,
      //       scale: 1,
      //       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);

  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      {
        bg: string;
        text: string;
        border: string;
        progress: string;
        shadow: string;
      }
    > = {
      emerald: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        progress: "bg-emerald-500",
        shadow: "shadow-emerald-500/20",
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        progress: "bg-purple-500",
        shadow: "shadow-purple-500/20",
      },
      pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-400",
        border: "border-pink-500/20",
        progress: "bg-pink-500",
        shadow: "shadow-pink-500/20",
      },
      amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/20",
        progress: "bg-amber-500",
        shadow: "shadow-amber-500/20",
      },
      sky: {
        bg: "bg-sky-500/10",
        text: "text-sky-400",
        border: "border-sky-500/20",
        progress: "bg-sky-500",
        shadow: "shadow-sky-500/20",
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        progress: "bg-blue-500",
        shadow: "shadow-blue-500/20",
      },
      red: {
        bg: "bg-rose-500/10",
        text: "text-rose-400",
        border: "border-rose-500/20",
        progress: "bg-rose-500",
        shadow: "shadow-rose-500/20",
      },
      green: {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/20",
        progress: "bg-green-500",
        shadow: "shadow-green-500/20",
      },
    };

    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 bg-zinc-900/50 mx-auto max-w-7xl relative overflow-hidden"
      aria-label="Skills and expertise"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 inline-flex items-center">
            <span className="text-emerald-400 mr-3">02.</span> Technical
            Expertise
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto text-base md:text-lg">
            I specialize in cutting-edge frontend technologies with a focus on
            creating exceptional, performant user experiences for enterprise
            applications and digital products.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);

            return (
              <div
                key={index}
                className={`skill-card p-6 h-[320px] rounded-xl border ${colorClasses.border} ${colorClasses.bg} 
                transition-all duration-300 shadow-md backdrop-blur-sm`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${colorClasses.bg} ${colorClasses.text}`}
                >
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* {skill.level && (
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className={`${colorClasses.text} font-medium`}>
                        Proficiency
                      </span>
                      <span className={`${colorClasses.text} font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800/70 rounded-full overflow-hidden">
                      <div
                        className={`skill-progress-bar h-full ${colorClasses.progress} rounded-full`}
                        style={
                          {
                            "--progress-width": `${skill.level}%`,
                          } as React.CSSProperties
                        }
                      ></div>
                    </div>
                  </div>
                )} */}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs px-2.5 py-1 rounded-full ${colorClasses.border} ${colorClasses.text} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-900/0 opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div> */}
    </section>
  );
}

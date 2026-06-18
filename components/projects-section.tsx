"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { Project } from "@/utils/types";
import { projects } from "@/utils/const/projects";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current?.children ?? [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      const cards = gsap.utils.toArray(".project-card");
      // Modified scroll animation to ensure full gallery scroll
      gsap.to(cards, {
        xPercent: -100 * projects.length,
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 20%",
          end: () => `+=${galleryRef.current?.scrollWidth}`,
          scrub: projects.length,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            end: "left 50%",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-zinc-900/50 relative overflow-hidden px-3 md:px-10 min-h-screen"
    >
      <div>
        <div ref={headingRef} className="text-center mb-16 pt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            <span className="mr-3">04.</span> Project Gallery
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            A curated showcase of my work, blending creativity and technology.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="flex space-x-8 h-full md:h-[80dvh] overflow-x-hidden w-full"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const infoElement = infoRef.current;
    if (!infoElement) return;

    const tl = gsap.timeline({ paused: true }).to(infoElement, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    infoElement.addEventListener("mouseenter", handleMouseEnter);
    infoElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      infoElement.removeEventListener("mouseenter", handleMouseEnter);
      infoElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
    );
  };

  const handleCarouselClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="project-card relative w-[90vw] md:w-[60vw] h-[40dvh] md:h-[60dvh] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out group">
      <div className="relative w-[100%] h-full">
        {project.screenshots.map((screenshot, imgIndex) => (
          <div
            key={imgIndex}
            className={`absolute inset-0 transition-opacity duration-500 ${
              imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={screenshot.url}
              alt={screenshot.alt}
              fill
              className="object-contain brightness-60 group-hover:brightness-100 transition-all duration-500"
            />
          </div>
        ))}

        {project.screenshots.length > 1 && (
          <div
            onClick={handleCarouselClick}
            className="absolute z-10 top-1/2 -translate-y-1/2 flex justify-between w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {project.screenshots.length > 1 && (
          <div
            onClick={handleCarouselClick}
            className="absolute bottom-3 right-0  -translate-x-1/2 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.screenshots.map((_, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => setCurrentImageIndex(imgIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  imgIndex === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-between p-8">
        <div
          ref={infoRef}
          className="project-info max-sm:bottom-2 max-sm:absolute"
        >
          <h3 className="md:text-3xl sm:text-xl text-lg lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="text-zinc-200 text-xs md:text-sm lg:text-base drop-shadow-md line-clamp-2">
            {project.description}
          </p>

          {project.screenshots.length > 1 && (
            <div className="mt-2 text-zinc-400 text-sm">
              <span className="bg-black/30 px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {project.screenshots.length}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap relative top-5 w-full max-md:hidden md:w-[80%] gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="md:px-3 px-1.5 max-sm:truncate py-1 bg-emerald-500/20 text-emerald-300 text-xs md:text-sm rounded-full border border-emerald-500/30 shadow-md transform transition-all duration-300 group-hover:-translate-y-1"
            >
              {tech}
            </span>
          ))}
        </div>

      {
        project.demo && (
          <div className="absolute  top-6 sm:bottom-8 right-8">
          <a
            href={project?.demo}
            target={`${project?.demo?.includes("#") ? "_self" : "_blank"}`}
            // target=""
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600 transition-all duration-300"
          >
            <span className="mr-2">Live Demo</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        )
      }
      </div>
    </div>
  );
}

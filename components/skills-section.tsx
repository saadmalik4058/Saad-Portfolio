"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/utils/const/skills";
import { getColorClasses } from "@/utils/function/get-color-classes";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        headingRef.current?.children ?? [],
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

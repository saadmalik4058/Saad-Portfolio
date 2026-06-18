"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineEvents } from "@/utils/const/timeline";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!isMobile && lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      gsap.utils.toArray(".timeline-event").forEach((event: any) => {
        gsap.from(event, {
          opacity: 0,
          x: isMobile ? 0 : -50,
          y: isMobile ? 50 : 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: event,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray(".highlight-date").forEach((date: any) => {
        gsap.to(date, {
          scale: 1.1,
          color: "#34d399",
          duration: 0.5,
          scrollTrigger: {
            trigger: date,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient, isMobile]);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="py-12 md:py-20 lg:py-32 bg-zinc-900/50 relative overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            <span className="mr-2 md:mr-3">03.</span> Professional Timeline
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-base md:text-lg">
            A journey through my tenure, showcasing my growth and contributions
            over time.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {!isMobile && (
            <div
              ref={lineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500 hidden md:block"
              style={{ height: "0%" }}
            />
          )}

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-event relative mb-8 md:mb-16 flex flex-col md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-5/12 p-4 sm:p-6 rounded-xl bg-zinc-800/50 border border-emerald-500/20 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3
                  className={`highlight-date text-lg sm:text-xl font-semibold mb-2 ${
                    index === 0 || index === timelineEvents.length - 1
                      ? "text-emerald-400"
                      : "text-white"
                  }`}
                >
                  {event.date}
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  {event.title}
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base mb-4">
                  {event.description}
                </p>
                <ul className="list-disc list-inside text-zinc-400 text-sm sm:text-base">
                  {event.contributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>
              </div>

              {!isMobile && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full z-10 border-2 border-zinc-900" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

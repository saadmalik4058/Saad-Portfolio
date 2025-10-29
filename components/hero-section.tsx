"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blockchainRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subheadingRef.current,
          { y: 40, opacity: 0, duration: 1 },
          "-=0.8"
        )
        .from(
          ctaRef.current?.children,
          { y: 30, opacity: 1, duration: 0.8, stagger: 0.2 },
          "-=0.6"
        )
        .from(
          socialsRef.current?.children,
          { x: -30, opacity: 0, duration: 0.6, stagger: 0.15 },
          "-=0.5"
        )
        .from(
          blockchainRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4"
        );

      gsap.to(".scroll-indicator", {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, sectionRef);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color:
              i % 4 === 0
                ? "#34d399"
                : i % 4 === 1
                ? "#8b5cf6"
                : i % 4 === 2
                ? "#ffffff"
                : "#d946ef",
            speed: Math.random() * 1.5 + 0.5,
            direction: Math.random() * 360,
            opacity: Math.random() * 0.6 + 0.2,
          });
        }

        const animate = () => {
          requestAnimationFrame(animate);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach((particle) => {
            const angle = (particle.direction * Math.PI) / 180;
            particle.x += Math.cos(angle) * particle.speed;
            particle.y += Math.sin(angle) * particle.speed;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.shadowColor = particle.color;
          });

          ctx.globalAlpha = 0.1;
          ctx.strokeStyle = "#34d399";
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        };

        animate();

        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#about", offsetY: 80 },
      ease: "power3.inOut",
    });
  };

  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    direction: number;
    opacity: number;
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col max-w-7xl mx-auto justify-center relative pt-16 overflow-hidden"
    >
      {/* <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      ></canvas> */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 -z-5"></div>

      <div className="container flex flex-col items-center justify-center text-center w-full mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="block text-zinc-200">Hey, I’m</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400  to-emerald-700 bg-clip-text text-transparent animate-gradient">
              Saad
            </span>
          </h1>

          <p
            ref={subheadingRef}
            className="md:text-xl sm:text-[18px] lg:text-3xl text-zinc-300 mb-4 font-medium leading-tight md:leading-relaxed"
          >
            I’m a web development enthusiast with{" "}
            <span className="text-emerald-400 font-bold">two years</span> of
            experience, driven by a passion for crafting intuitive digital
            solutions that bring ideas to life online.
          </p>

          <span
            ref={blockchainRef}
            className="inline-block text-zinc-400 text-lg md:text-xl mb-2 mt-4 italic bg-zinc-800/50 px-4 py-2 rounded-lg border border-emerald-500/30"
          >
            Passionate {" "}
            <span className="text-emerald-400">Frontend Developer</span>  focused on building fast, scalable, and user-friendly web applications with React and Next.js.
          </span>

          <div
            ref={ctaRef}
            className="flex flex-row justify-center items-center  flex-wrap gap-6 "
          >
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10  text-lg font-semibold rounded-xl py-5 shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#projects", offsetY: 40 },
                  ease: "power3.inOut",
                });
              }}
            >
              Explore My Projects
            </Button>

            <Button
              variant="outline"
              className="border-2 border-emerald-400 hover:text-white text-emerald-400 hover:bg-emerald-400/10 px-10  text-lg font-semibold rounded-xl shadow-lg py-5 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#contact", offsetY: 80 },
                  ease: "power3.inOut",
                });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

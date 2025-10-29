"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current?.children, {
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

      // Animate form
      gsap.from(formRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // Animate info
      gsap.from(infoRef.current?.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    gsap.to(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setFormSubmitted(true);
        gsap.fromTo(
          ".success-message",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 bg-zinc-900/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-flex items-center">
            <span className="text-emerald-400 mr-3">05.</span> Get In Touch
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, I'll do my best to get
            back to you!
          </p>
        </div>

        <div className=" flex items-center justify-center">
          <div
            ref={infoRef}
            className="space-y-6 md:space-y-8 order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-400 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a
                  href="mailto:saadmalik459@gmail.com"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors break-all"
                >
                  saadmalik459@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-400 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a
                  href="tel:+923346226266"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  +92 334 6226266
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/saadmalik4058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-emerald-500/20 p-3 rounded-full text-zinc-300 hover:text-emerald-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/saad-malik-b78589284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-emerald-500/20 p-3 rounded-full text-zinc-300 hover:text-emerald-400 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

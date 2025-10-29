"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer elements
      gsap.from(footerRef.current?.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-zinc-900 border-t border-zinc-800 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="text-2xl font-bold text-emerald-400">
              <span className="text-white">Saad</span>Malik
            </Link>
            <p className="text-zinc-400 mt-2 max-w-md">
              Building exceptional digital experiences with modern frontend
              technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 p-3 rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} Saad Malik. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

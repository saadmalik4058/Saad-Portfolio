import { gsap } from "gsap";

/**
 * Smooth-scrolls to a section by id. Relies on gsap ScrollToPlugin being
 * registered (done once in app/page.tsx).
 */
export const scrollToSection = (id: string, offsetY = 80) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#${id}`, offsetY },
    ease: "power3.inOut",
  });
};

export const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power3.inOut",
  });
};

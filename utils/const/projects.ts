import type { Project } from "@/utils/types";

export const projects: Project[] = [
  {
    title: "Linkgraph",
    description:
      "Sports Facility Management Solution, Manager application and Showcase Site using Next.js and React.js",
    screenshots: [
      {
        url: "/linkgraph1.jpg",
        alt: "Dashboard overview",
      },
      { url: "/linkgraph2.jpg", alt: "linkgraph2" },
      { url: "/linkgraph3.png", alt: "linkgraph3" },
      { url: "/linkgraph4.png", alt: "linkgraph4" },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Module CSS",
      "GSAP",
      "Redux Toolkit",
      "React Router",
      "React-Hook-Form",
      "React i18next",
    ],
    demo: "https://www.linkgraph.com/",
  },
  {
    title: "Ecommerce | Design",
    description: " Ecommerce Website | Online Shopping Platform ",
    screenshots: [{ url: "/Ecommerce.png", alt: "Ecommerce-1" }],
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
  },
  // {
  //   title: "FID World | Unified Web Platform ",
  //   description: "Responsive UI to showcase Zoaverse and WOOV Club Projects ",
  //   screenshots: [
  //     { url: "/fid-world-1.png", alt: "fid-world-1" },
  //     { url: "/fid-world-2.png", alt: "fid-2" },
  //     { url: "/fid-world-3.png", alt: "fid-3" },
  //   ],
  //   technologies: ["Next.js", "Tailwind CSS"],
  //   demo: "https://fid-world.com",
  // },
  // {
  //   title: "Cost Calculator",
  //   description: "Business Financial Analysis Tool",
  //   screenshots: [
  //     { url: "/cost-calculator-app.png", alt: "cost-1" },
  //     { url: "/cost-calculator-2.png", alt: "cost-2" },
  //   ],
  //   technologies: [
  //     "React.js",
  //     "Tailwind CSS",
  //     "Redux Toolkit",
  //     "React-Hook-Form",
  //   ],
  //   demo: "https://costing-app-six.vercel.app/",
  // },
  // {
  //   title: "Feative Studios",
  //   description:
  //     "Gaming and Metaverse Showcase Website using Next.js with Tailwind CSS",
  //   screenshots: [{ url: "/feative-studios.png", alt: "feative studios" }],
  //   technologies: ["Next.js", "Tailwind CSS"],
  //   demo: "https://www.feativestudios.com",
  // },
  // {
  //   title: "Pizza Delivery ",
  //   description: "Pizza Delivery Project via Redux Toolkit",
  //   screenshots: [{ url: "/Pizza-delivery.png", alt: "Pizza Delivery" }],
  //   technologies: ["React.js", "Redux Toolkit"],
  //   demo: "https://pizza-delivery-app-orcin.vercel.app/",
  // },
];

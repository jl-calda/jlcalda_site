import { IconType } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export type HeroLinkType = {
  label: string;
  url: string;
  isSecondary: boolean;
};

export type HomeDataType = {
  heroText: string;
  heroSubtext: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroLinks: HeroLinkType[];
  techStacks: string[];
  techStackText: string;
  techStackDescription: string;
};

export const homeData = {
  heroText: "Joey L. Calda",
  heroSubtext: "Web developer",
  heroDescription:
    "I'm a web developer based in the Philippines. I'm also a freelance web developer. I'm currently accepting projects.",
  heroImage: "/images/hero-image.jpg",
  heroImageAlt: "Joey Calda",
  heroLinks: [
    {
      label: "Github",
      isSecondary: true,
      url: "https://github.com/jl-calda",
    },
    {
      label: "LinkedIn",
      isSecondary: false,
      url: "https://www.linkedin.com/in/joey-calda-0b1b3b1b2/",
    },
  ],
  techStacks: [
    "next-js",
    "tailwindcss",
    "next-auth",
    "mongodb",
    "typescript",
    "prisma",
    "node-js",
    "react-js",
    "pusher",
    "headless-ui",
    "radix-ui",
  ],
  techStackText: "Tech Stacks",
  techStackQuote:
    "These are the technologies I used in any form in my projects. I believe it is best to learn by doing projects and debugging errors.",
  techStackDescription:
    "These are the technologies I'm currently using. I'm also learning new technologies. Doesn't I'm expert in these technologies, who is?",
};

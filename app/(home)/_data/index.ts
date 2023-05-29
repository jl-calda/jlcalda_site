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
  heroText: "Joey Calda",
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
    "react",
    "typescript",
    "tailwindcss",
    "node-js",
    "prisma",
    "mongodb",
  ],
  techStackText: "Tech Stacks",
  techStackDescription: "I'm currently using these tech stacks in my projects.",
};

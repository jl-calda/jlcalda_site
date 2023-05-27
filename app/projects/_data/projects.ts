import { IconType } from "react-icons";
import {
  SiPrisma,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPusher,
  SiHeadlessui,
  SiWebauthn,
  SiMongodb,
} from "react-icons/si";

type StackType = {
  name: string;
  icon: IconType;
};

export const stacks = [
  {
    name: "next-js",
    icon: SiNextdotjs,
  },
  {
    name: "tailwindcss",
    icon: SiTailwindcss,
  },
  {
    name: "next-auth",
    icon: SiWebauthn,
  },
  {
    name: "prisma",
    icon: SiPrisma,
  },
  {
    name: "typescript",
    icon: SiTypescript,
  },
  {
    name: "pusher",
    icon: SiPusher,
  },
  {
    name: "headless-ui",
    icon: SiHeadlessui,
  },
  {
    name: "mongodb",
    icon: SiMongodb,
  },
];

export const projects = [
  {
    projectId: "netflix-clone",
    title: "Netflix Clone",
    description:
      "A netflix clone using next-js, tailwindcss, next-auth and mondodb. This app is based on the tutorial by coding with antonio on youtube.",
    stack: ["next-js", "tailwindcss", "next-auth", "mongodb", "typescript"],
    images: [
      "/images/netflix-clone/photo-1.png",
      "/images/netflix-clone/photo-2.png",
      "/images/netflix-clone/photo-3.png",
      "/images/netflix-clone/photo-4.png",
      "/images/netflix-clone/photo-5.png",
    ],
    liveUrl: "https:jl-next-netflix-clone.vercel.app",
    githubUrl: "https://github.com/jl-calda/next-netflix-clone",
  },
  {
    projectId: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A twitter using next-js (app router), tailwindcss, next-auth and mondodb. This app is based on the tutorial by coding with antonio on youtube.",
    stack: ["next-js", "tailwindcss", "next-auth", "mongodb", "typescript"],
    images: [
      "/images/airbnb-clone/photo-1.png",
      "/images/airbnb-clone/photo-2.png",
      "/images/airbnb-clone/photo-3.png",
      "/images/airbnb-clone/photo-4.png",
      "/images/airbnb-clone/photo-5.png",
    ],
    liveUrl: "https:jl-next-airbnb-clone.vercel.app",
    githubUrl: "https://github.com/jl-calda/next-airbnb-clone",
  },
  {
    projectId: "twitter-clone",
    title: "Twitter Clone",
    description:
      "A twitter using next-js, tailwindcss, next-auth, prisma and mondodb. This app is based on the tutorial by coding with antonio on youtube.",
    stack: [
      "next-js",
      "tailwindcss",
      "next-auth",
      "mongodb",
      "typescript",
      "prisma",
    ],
    images: [
      "/images/twitter-clone/photo-1.png",
      "/images/twitter-clone/photo-2.png",
      "/images/twitter-clone/photo-3.png",
      "/images/twitter-clone/photo-4.png",
      "/images/twitter-clone/photo-5.png",
    ],
    liveUrl: "https:jl-next-twitter-clone.vercel.app",
    githubUrl: "https://github.com/jl-calda/next-twitter-clone",
  },
  {
    projectId: "messenger-clone",
    title: "Messenger Clone",
    description:
      "A twitter using next-js (app router), tailwindcss, headless-ui, next-auth,pusher and mondodb. This app is based on the tutorial by coding with antonio on youtube.",
    stack: [
      "next-js",
      "tailwindcss",
      "next-auth",
      "mongodb",
      "typescript",
      "pusher",
    ],
    images: [
      "/images/messenger-clone/photo-1.png",
      "/images/messenger-clone/photo-2.png",
      "/images/messenger-clone/photo-3.png",
      "/images/messenger-clone/photo-4.png",
      "/images/messenger-clone/photo-5.png",
    ],
    liveUrl: "https:jl-next-airbnb-clone.vercel.app",
    githubUrl: "https://github.com/jl-calda/next-messenger-clone",
  },
];

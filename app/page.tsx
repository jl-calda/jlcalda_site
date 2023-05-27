import clsx from "clsx";

import { Merriweather } from "next/font/google";
import Section from "./_components/Section";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="prose bg-stone-50 px-2 py-4 w-full h-full flex flex-col items-center justify-center">
      <h1
        className={clsx(merriweather.className, "text-gray-800 tracking-wider")}
      >
        Joey Calda
      </h1>
      <h3>WEB DEVELOPER</h3>
      <p>Hi, I'm Joey. I'm a self taught web developer based in Singapore.</p>
      <p>Owner of www.warto.sg</p>
      <p>Current stack will be Next.js, tailwind.css</p>
    </div>
  );
}

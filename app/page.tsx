import clsx from "clsx";

import { Merriweather } from "next/font/google";
import Section from "./_components/Section";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="prose">
      <h1
        className={clsx(merriweather.className, "text-gray-800 tracking-wider")}
      >
        Joey Calda
      </h1>
      <h3>WEB DEVELOPER</h3>
      <p>Hi, I'm Joey. I'm a self taught web developer based in Singapore.</p>
      <p>Current stack will be Next.js, tailwind.css</p>
    </div>
  );
}

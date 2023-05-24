import clsx from "clsx";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Home() {
  return (
    <section className="h-full flex flex-col prose px-4 py-4">
      <h1
        className={clsx(merriweather.className, "text-gray-800 tracking-wider")}
      >
        Joey Calda
      </h1>
      <p>Hi, I;'m Joey. I'm a self taught web developer</p>
    </section>
  );
}

import clsx from "clsx";
import { Merriweather } from "next/font/google";
import Image from "next/image";

import { homeData } from "./_data";
import HeroLinks from "./_components/HeroLinks";
import ClientOnly from "../_components/ClientOnly";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export default function Home() {
  const heroText = homeData.heroText;
  const heroSubtext = homeData.heroSubtext;
  const heroDescription = homeData.heroDescription;
  const heroImage = homeData.heroImage;
  const heroLinks = homeData.heroLinks;

  return (
    <div className="max-w-full prose bg-stone-50 h-full flex flex-col">
      <div className="w-full min-h-[60vh] grid sm:grid-cols-2 sm:gap-x-2 gap-y-2">
        <div className="order-1 flex flex-col space-y-2 items-center justify-center">
          <h1
            className={clsx(
              merriweather.className,
              "text-gray-800 tracking-wider",
              "first-letter:text-7xl"
            )}
          >
            {heroText}
          </h1>
          <h3>{heroSubtext}</h3>
          <p className="first-letter:font-bold first-letter:text-lg">
            {heroDescription}
          </p>
          <p className="self-start">Read More...</p>
          <HeroLinks links={heroLinks} />
        </div>
        <div className="sm:order-1 w-full h-full flex items-center justify-center">
          <div className="hidden sm:block relative w-64 h-96">
            <Image
              src={heroImage}
              fill
              className="object-cover object-top m-0 rounded-md shadow-lg"
              alt="Picture of the author"
            />
          </div>
          <div className="relative sm:hidden w-64 h-64">
            <Image
              src={heroImage}
              fill
              className="object-cover object-top m-0 rounded-full shadow-lg"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <h2>Skills and Tech Stacks</h2>
    </div>
  );
}

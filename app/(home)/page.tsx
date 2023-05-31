import clsx from "clsx";
import { Merriweather } from "next/font/google";
import Image from "next/image";

import { homeData } from "./_data";
import HeroLinks from "./_components/HeroLinks";
import ClientOnly from "../_components/ClientOnly";
import StackLinks from "./_components/StackLinks";
import { projects } from "../projects/_data";
import OtherProjectCard from "../projects/[projectId]/_components/OtherProjectCard";
import Link from "next/link";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import TooltipBox from "../_components/TooltipBox";
import { blogData } from "../blogs/_data";
import BlogCard from "../blogs/_components/BlogCard";

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
  const heroQuote = homeData.techStackQuote;

  const slicedBlogs = blogData.blogs
    .filter((blog) => blog.isFeatured)
    .slice(0, 4);

  const slicedFeaturedProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <div className="max-w-full prose bg-stone-50 min-h-full flex flex-col">
      <div className="w-full min-h-[70vh] sm:min-h-[50vh] grid sm:grid-cols-2 sm:gap-x-2 gap-y-2">
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
          <h3 className="uppercase">{heroSubtext}</h3>
          <p className="first-letter:font-bold first-letter:text-lg">
            {heroDescription}
          </p>
          <Link
            href="/info"
            className="no-underline self-start text-base"
          >
            <p className="px-3 py-2 underline self-end">Read More...</p>
          </Link>
          <HeroLinks links={heroLinks} />
        </div>
        <div className="sm:order-1 w-full h-full flex items-center justify-center">
          <div className="hidden sm:block relative w-64 h-96">
            <Image
              src={heroImage}
              fill
              className="object-cover object-top m-0 rounded-md border-2 border-black"
              alt="Picture of the author"
            />
          </div>
          <div className="relative sm:hidden w-64 h-64">
            <Image
              src={heroImage}
              fill
              className="object-cover object-top m-0 rounded-full border-2 border-black"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <h2 className="m-0 pt-12 pb-6">Tech Stacks</h2>
      <div className="w-full grid sm:grid-cols-2 sm:gap-x-2 gap-y-2">
        <StackLinks stack={homeData.techStacks} />
        <div className="py-4 px-2 order-1 sm:order-2 bg-gray-200 text-gray-800 border-black border-2 rounded-md">
          <ImQuotesLeft className="text-4xl inline" />
          <blockquote className="my-0 mx-2 border-none inline">{`${heroQuote}`}</blockquote>
          <ImQuotesRight className="text-4xl inline" />
        </div>
      </div>
      <TooltipBox
        text="Go to blogs"
        href="/blogs"
        side="bottom"
      >
        <h2 className="m-0 pt-12 pb-2 cursor-pointer">Featured Blogs</h2>
      </TooltipBox>
      <p>
        Below are collection of articles I wrote which includes tips that I
        learned and can also be use as tutorial.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-4 gap-y-4 px-2 mb-10">
        {slicedBlogs.map((project) => (
          <BlogCard
            key={crypto.randomUUID()}
            blog={project}
          />
        ))}
      </div>
      <div className="bg-gray-800 text-white rounded-md pt-2 px-2 py-6">
        <TooltipBox
          text="Go to projects"
          href="/projects"
          side="bottom"
        >
          <h2 className="m-0 pt-4 pb-2 cursor-pointer text-white">
            Featured Projects
          </h2>
        </TooltipBox>
        <p>
          Some projects I made to acquire more knowledge in web development.
        </p>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-x-4 gap-y-4 px-2">
          {slicedFeaturedProjects.map((project, index) => (
            <OtherProjectCard
              key={crypto.randomUUID()}
              project={project}
              noText
            />
          ))}
        </div>
      </div>

      <h2 className="m-0 pt-8 pb-2">About this site</h2>
      <p className="text-xs font-light">
        This is designed using next-js, tailwindcss, next-auth, prisma and
        mongodb.
      </p>
      <p className="text-xs font-light">All rights reserved.</p>
    </div>
  );
}

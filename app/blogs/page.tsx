import React from "react";
import Section from "../_components/Section";
import { Merriweather } from "next/font/google";
import clsx from "clsx";
import TopicList from "./_components/TopicList";
import { blogData } from "./_data";
import getMarkdown from "../_actions/getMarkdown";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import BlogCard from "./_components/BlogCard";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

const BlogsPage = () => {
  const featuredBlog = blogData.blogs[blogData.featuredBlogNo];
  const featuredBlogMatter = getMarkdown(featuredBlog.slug);
  const featuredContent = featuredBlogMatter.content;
  const featuredPreview = featuredContent.split("\n").slice(0, 10).join("\n");
  const featuredData = featuredBlogMatter.data;

  const otherBlogs = blogData.blogs.filter(
    (blog) => blog.slug !== featuredBlog.slug
  );

  return (
    <div className="prose max-w-full w-full flex flex-col items-center space-y-2 px-2 py-2">
      <div className="prose mx-auto">
        <div className="px-2 py-1 bg-gray-800 text-white flex-0 max-w-fit mb-6">
          <h2 className={clsx(merriweather.className, "text-white", "m-0")}>
            Featured Blog
          </h2>
        </div>
        <h3 className="">{featuredData.title}</h3>
        <img
          src={featuredData.thumbnail}
          alt={featuredData.title}
        />
        <div className="text-xs sm:text-base">
          <Markdown>{featuredPreview}</Markdown>
        </div>
        <Link href={`/blogs/${featuredData.slug}`}>
          <p>Read More</p>
        </Link>
        <TopicList />
        <h2 className={clsx(merriweather.className)}>
          You might like these blogs too...
        </h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2">
          {otherBlogs.map((blog) => (
            <BlogCard
              blog={blog}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

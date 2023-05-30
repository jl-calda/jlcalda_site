import React from "react";
import Section from "../_components/Section";
import { Merriweather } from "next/font/google";
import clsx from "clsx";
import TopicList from "./_components/TopicList";
import { blogData } from "./_data";
import getMarkdown from "../_actions/getMarkdown";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

const BlogPage = () => {
  const featuredBlog = blogData.blogs[blogData.featuredBlogNo];
  const featuredBlogMatter = getMarkdown(featuredBlog.slug);
  const content = featuredBlogMatter.content;
  const preview = content.split("\n").slice(0, 35).join("\n");
  const data = featuredBlogMatter.data;
  return (
    <div className="prose max-w-full h-full w-full flex flex-1 flex-col space-y-2">
      <h2 className={clsx(merriweather.className)}>Featured Blog</h2>
      <h1>{data.title}</h1>
      <Markdown>{preview}</Markdown>
      <Link href={`/blogs/${data.slug}`}>
        <p>Read More</p>
      </Link>
      <TopicList />
      <h4 className={clsx(merriweather.className)}>
        You might like these blogs too...
      </h4>
    </div>
  );
};

export default BlogPage;

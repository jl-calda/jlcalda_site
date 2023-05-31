import React from "react";
import { BlogType } from "../_data";
import getMarkdown from "@/app/_actions/getMarkdown";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogType;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const slug = blog.slug;
  const blogMatter = getMarkdown(slug);
  const blogData = blogMatter.data;
  const blogContent = blogMatter.content;
  const thumbnail = blogData.thumbnail;
  return (
    <Link
      href={`/blogs/${slug}`}
      className="no-underline space-y-2 h-full flex flex-col py-4 shadow-md px-2 rounded-md bg-gray-100"
    >
      <h4 className="m-0">{blogData.title}</h4>
      <div className="flex-1">
        <img
          src={thumbnail}
          alt={blogData.title}
          className="m-0 grow-0 rounded-md flex-1"
        />
      </div>
      <div className="self-start flex flex-row flex-wrap gap-x-2 gap-y-2">
        {blogData.topics.slice(0, 3).map((topic: string) => (
          <div className="px-2 py-1 text-xs bg-gray-800 text-white rounded-sm">
            {topic}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard;

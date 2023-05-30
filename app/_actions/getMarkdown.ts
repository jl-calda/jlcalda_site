import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getMarkdown = (slug: string) => {
  const content = fs.readFileSync(
    path.join(process.cwd(), "public/blogs", `${slug}.md`),
    "utf-8"
  );
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkdown;

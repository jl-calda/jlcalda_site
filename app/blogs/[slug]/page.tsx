import getMarkdown from "@/app/_actions/getMarkdown";
import BackHeader from "@/app/projects/_components/BackHeader";
import Markdown from "markdown-to-jsx";

interface IBlogPageParams {
  slug: string;
}

const BlogPage = ({ params }: { params: IBlogPageParams }) => {
  const { slug } = params;
  const markdown = getMarkdown(slug);
  const content = markdown.content;
  const data = markdown.data;

  // console.log("content", content);
  return (
    <div className="prose">
      <BackHeader />
      <h2 className="m-0">{data.title}</h2>
      <p className="m-0">{data.author}</p>
      <p className="m-0">{data.date}</p>
      <div className="flex flex-row space-x-2">
        {data.topics.map((topic: string) => (
          <div className="px-2 py-1 bg-gray-500 text-white text-sm">
            {topic}
          </div>
        ))}
      </div>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default BlogPage;

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
    <div className="max-w-full h-full prose px-2 py-2">
      <BackHeader />
      <div className="prose mx-auto">
        <div className="flex flex-col space-y-2">
          <h2 className="mx-auto m-0">{data.title}</h2>
          <p className="m-0">
            Author : <span className="font-bold">{data.author}</span>
          </p>
          <p className="m-0">
            Date : <span className="font-bold">{data.date}</span>
          </p>
          <div className="flex flex-row space-x-2">
            {data.topics.map((topic: string) => (
              <div className="px-2 py-1 bg-gray-500 text-white text-sm">
                {topic}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border border-gray-300 mt-6" />
        <img
          src={data.thumbnail}
          alt={data.title}
        />
        <div className="mx-auto text-xs sm:text-base leading-5">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

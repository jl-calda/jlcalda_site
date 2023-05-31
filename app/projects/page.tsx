import React from "react";

import { projects } from "./_data";
import ProjectCard from "./_components/ProjectCard";
import { Merriweather } from "next/font/google";
import BackHeader from "./_components/BackHeader";
import clsx from "clsx";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

interface ProjectsPageParams {
  category?: string;
}

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: ProjectsPageParams;
}) => {
  console.log(searchParams);
  const { category } = searchParams;
  console.log(category);

  const filteredProjects = !category
    ? projects.filter((project) => project.featured)
    : projects.filter((project) => project.stack.includes(category));

  console.log(filteredProjects);

  return (
    <div className="prose max-w-full w-full flex flex-col items-center space-y-2 px-2 py-2">
      {!category ? (
        <div className="self-start px-2 py-1 bg-gray-800 text-white flex-0 max-w-fit mb-6">
          <h2 className={clsx(merriweather.className, "text-white", "m-0")}>
            Featured Projects
          </h2>
        </div>
      ) : (
        <BackHeader title={`Projects using ${category}`} />
      )}

      <div className="flex flex-col items-center space-y-4">
        {filteredProjects.map((project, index) => (
          <>
            <ProjectCard
              key={crypto.randomUUID()}
              project={project}
            />
            {index === projects.length - 1 ? null : (
              <div className="w-full h-1 bg-gray-200 rounded-full" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

import React from "react";

import { projects } from "./_data/projects";
import ProjectCard from "./_components/ProjectCard";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

const ProjectsPage = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="prose max-w-full w-full flex flex-col items-center space-y-2 pb-6">
      <h2 className={`${merriweather.className} my-2`}>Feature Projects</h2>
      <div className="flex flex-col items-center space-y-4">
        {featuredProjects.map((project, index) => (
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

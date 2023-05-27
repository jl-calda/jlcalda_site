import React from "react";

import { projects } from "./_data/projects";
import ProjectCard from "./_components/ProjectCard";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

const ProjectsPage = () => {
  return (
    <div className="prose max-w-full w-full flex flex-col items-center space-y-2">
      <h2 className={`${merriweather.className} my-2`}>Feature Projects</h2>
      <div className="flex flex-col items-center space-y-4">
        {projects.map((project) => (
          <>
            <ProjectCard
              key={crypto.randomUUID()}
              project={project}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

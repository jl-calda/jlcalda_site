import React from "react";

import { projects } from "./_data/projects";
import ProjectCard from "./_components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={crypto.randomUUID()}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;

import { ProjectType } from "@/app/_types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClassNames } from "@emotion/react";

interface OtherProjectTypeProps {
  project: ProjectType;
}

const OtherProjectCard: React.FC<OtherProjectTypeProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.projectId}`}
      className="no-underline"
    >
      <div className="flex flex-col shadow-sm px-2 pt-2 pb-4 space-y-4 border rounded-md">
        <h4 className="no-underline m-0 inline">{project.title}</h4>
        <img
          src={project.images[0]}
          alt={project.title}
          className="block w-full h-full m-0 rounded-md"
        />
        <p className="m-0 text-sm no-underline">
          {project.description.slice(0, 65).concat("...")}
        </p>
      </div>
    </Link>
  );
};

export default OtherProjectCard;

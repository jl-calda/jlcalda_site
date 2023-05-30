import { ProjectType } from "@/app/_types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OtherProjectTypeProps {
  project: ProjectType;
  noText?: boolean;
}

const OtherProjectCard: React.FC<OtherProjectTypeProps> = ({
  project,
  noText,
}) => {
  return (
    <Link
      href={`/projects/${project.projectId}`}
      className="no-underline w-full h-full"
    >
      <div className="h-full w-full flex flex-col md:shadow-md px-2 pt-2 pb-4 space-y-4 md:border rounded-md m-1">
        <h4 className="flex-1 no-underline m-0 inline">{project.title}</h4>
        <img
          src={project.images[0]}
          alt={project.title}
          className="block w-full h-auto m-0 rounded-md self-end grow-0"
        />
        {!noText && (
          <p className="m-0 text-sm no-underline">
            {project.description.slice(0, 65).concat("...")}
          </p>
        )}
      </div>
    </Link>
  );
};

export default OtherProjectCard;

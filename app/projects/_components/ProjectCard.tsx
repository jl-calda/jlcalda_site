"use client";

import Button from "@/app/_components/Button";
import { ProjectType } from "@/app/_types";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import StackIcon from "./StackIcon";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import TooltipBox from "@/app/_components/TooltipBox";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="prose py-4 px-6 m-0">
      <h2>{project.title}</h2>
      <div className="sm:hidden">
        <ImageCarousel data={project.images} />
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-2">
        <div className="col-span-1">
          <div className="flex flex-row space-x-2 item-center">
            {project.stack.map((item) => (
              <StackIcon
                key={crypto.randomUUID()}
                stack={item}
              />
            ))}
          </div>
          <p>{project.description}</p>
          <div className="flex flex-row space-x-2">
            <TooltipBox text="Go to github repo">
              <Button
                edgy
                label={"Github"}
                icon={FaGithub}
                onClick={() => window.open(project.githubUrl, "_blank")}
              />
            </TooltipBox>
            <TooltipBox text="Go to live site">
              <Button
                edgy
                secondary
                onClick={() => window.open(project.liveUrl, "_blank")}
                icon={BsGlobe2}
                label={"Live site"}
              />
            </TooltipBox>
          </div>
        </div>
        <div className="hidden sm:block">
          <ImageCarousel data={project.images} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

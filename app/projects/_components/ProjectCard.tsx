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
import ImageListBox from "./ImageListBox";
import ImageList from "./ImageList";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  return (
    <div className="py-2 px-4 m-0 min-w-full flex flex-col space-y-4 grow">
      <h3
        className="cursor-pointer hover:opacity-90 m-0"
        onClick={() => router.push(`/projects/${project.projectId}`)}
      >
        {project.title}
      </h3>
      <div className="sm:hidden relative w-full min-h-[18vh]">
        <Image
          src={project.images[0]}
          fill
          alt="project photo"
          className="object-top rounded-md object-contain m-0"
        />
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-x-2">
        <div className="sm:col-span-1">
          <div className="flex flex-row flex-wrap gap-y-2 gap-x-2 item-center">
            {project.stack.map((item) => (
              <StackIcon
                key={crypto.randomUUID()}
                stack={item}
              />
            ))}
          </div>
          <p className="">{project.description}</p>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
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
        <div className="hidden sm:block sm:col-span-2">
          <ImageList images={project.images} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

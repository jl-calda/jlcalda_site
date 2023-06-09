"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

import Button from "@/app/_components/Button";
import { ProjectType } from "@/app/_types";
import StackIcon from "./StackIcon";
import TooltipBox from "@/app/_components/TooltipBox";
import ImageList from "./ImageList";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  return (
    <div className="pt-4 pb-6 min-h-[50vh] px-4 m-0 min-w-full flex flex-col space-y-4 grow">
      <h3
        className="cursor-pointer hover:opacity-90 m-0"
        onClick={() => router.push(`/projects/${project.projectId}`)}
      >
        {project.title}
      </h3>
      <div className="sm:hidden relative flex-1 w-full h-auto">
        <img
          src={project.images[0]}
          alt="project photo"
          className="rounded-md object-cover m-0"
        />
        {/* <Image
          src={project.images[0]}
          fill
          alt="project photo"
          className="object-top rounded-md object-contain m-0"
        /> */}
      </div>
      <div className="h-full flex-1 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-2">
        <div className="flex flex-col sm:col-span-1">
          <div className="flex flex-row flex-wrap gap-y-2 gap-x-2 item-center">
            {project.stack.map((item) => (
              <StackIcon
                key={crypto.randomUUID()}
                stack={item}
              />
            ))}
          </div>
          <p className="flex-1">{project.description}</p>
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
        <div className="hidden sm:block md:col-span-2">
          <ImageList images={project.images} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

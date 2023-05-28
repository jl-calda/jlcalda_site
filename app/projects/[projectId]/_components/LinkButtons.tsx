"use client";

import Button from "@/app/_components/Button";
import TooltipBox from "@/app/_components/TooltipBox";
import { ProjectType } from "@/app/_types";
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

interface LinkButtonsProps {
  project: ProjectType | undefined;
}

const LinkButtons: React.FC<LinkButtonsProps> = ({ project }) => {
  return (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
      <TooltipBox text="Go to github repo">
        <Button
          label={"Github"}
          icon={FaGithub}
          onClick={() => window.open(project?.githubUrl, "_blank")}
        />
      </TooltipBox>
      <TooltipBox text="Go to live site">
        <Button
          secondary
          onClick={() => window.open(project?.liveUrl, "_blank")}
          icon={BsGlobe2}
          label={"Live site"}
        />
      </TooltipBox>
    </div>
  );
};

export default LinkButtons;

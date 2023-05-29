"use client";

import { stacks } from "../_data";
import * as Tooltip from "@radix-ui/react-tooltip";
import TooltipBox from "@/app/_components/TooltipBox";

interface StackIconProps {
  stack: string;
}

const StackIcon: React.FC<StackIconProps> = ({ stack }) => {
  const index = stacks.findIndex((item) => item.name === stack);
  const Icon = stacks[index].icon;

  console.log(index);

  return (
    <TooltipBox text={stack}>
      <div
        onClick={() => {}}
        className="
            hover:scale-105 hover:opacity-90 transition-all duration-200
            flex flex-row p-2 rounded-full bg-slate-800 cursor-pointer"
      >
        <Icon
          size={25}
          className="text-white"
        />
      </div>
    </TooltipBox>
  );
};

export default StackIcon;

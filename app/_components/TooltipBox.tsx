import * as Tooltip from "@radix-ui/react-tooltip";

import React from "react";

interface TooltipBoxProps {
  children: React.ReactNode;
  text: string;
}

const TooltipBox: React.FC<TooltipBoxProps> = ({ children, text }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-slate-800 text-white text-xs p-2 rounded-sm"
            sideOffset={5}
          >
            {text}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipBox;

"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

import React from "react";

interface TooltipBoxProps {
  children: React.ReactNode;
  text: string;
  side?: "top" | "right" | "bottom" | "left";
  href?: string;
}

const TooltipBox: React.FC<TooltipBoxProps> = ({
  children,
  text,
  side = "top",
  href,
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {href ? (
            <Link
              href={href}
              className="no-underline"
            >
              {children}
            </Link>
          ) : (
            <div>{children}</div>
          )}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-slate-800 text-white text-xs p-2 rounded-sm"
            sideOffset={5}
            side={side}
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

"use client";

import { stacks } from "../_data";
import TooltipBox from "@/app/_components/TooltipBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

interface StackIconProps {
  stack: string;
}

const StackIcon: React.FC<StackIconProps> = ({ stack }) => {
  const index = stacks.findIndex((item) => item.name === stack);
  const Icon = stacks[index].icon;

  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    const updatedQuery = {
      ...currentQuery,
      category: stack,
    };

    const url = qs.stringifyUrl(
      {
        url: "/projects",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  }, [params, router, pathname]);

  return (
    <TooltipBox text={stack}>
      <div
        onClick={handleClick}
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

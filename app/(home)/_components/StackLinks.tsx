import StackIcon from "@/app/projects/_components/StackIcon";
import React from "react";

interface StackLinksProps {
  stack: string[];
}

const StackLinks: React.FC<StackLinksProps> = ({ stack }) => {
  return (
    <div className="max-h-fit order-2 sm:order-1 flex flex-row flex-wrap gap-x-2 sm:gap-x-2 gap-y-2 items-center">
      {stack?.map((item) => (
        <StackIcon
          key={crypto.randomUUID(0)}
          stack={item}
        />
      ))}
    </div>
  );
};

export default StackLinks;

import StackIcon from "@/app/projects/_components/StackIcon";
import React from "react";

interface StackLinksProps {
  stack: string[];
}

const StackLinks: React.FC<StackLinksProps> = ({ stack }) => {
  return (
    <div className="order-2 sm:order-1 flex flex-row flex-wrap gap-x-2 gap-y-2">
      {stack?.map((item) => (
        <StackIcon stack={item} />
      ))}
    </div>
  );
};

export default StackLinks;
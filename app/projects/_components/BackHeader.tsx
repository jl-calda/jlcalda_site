"use client";
import TooltipBox from "@/app/_components/TooltipBox";
import { useRouter } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

interface BackHeaderProps {
  title?: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="flex flex-row space-x-2 items-center justify-between cursor-pointer mb-2 sm:mb-4 md:mb-6"
    >
      <TooltipBox
        text="Go back"
        side="bottom"
      >
        <IoChevronBackCircle size={40} />
      </TooltipBox>
      {title && <h2 className={`${merriweather.className} m-0`}>{title}</h2>}
    </div>
  );
};

export default BackHeader;

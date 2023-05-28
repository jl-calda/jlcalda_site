"use client";
import TooltipBox from "@/app/_components/TooltipBox";
import { useRouter } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";

type Props = {};

const BackHeader = (props: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="w-full flex flex-row space-x-2 items-center cursor-pointer mb-6"
    >
      <TooltipBox text="Back to project page">
        <IoChevronBackCircle size={40} />
      </TooltipBox>
    </div>
  );
};

export default BackHeader;

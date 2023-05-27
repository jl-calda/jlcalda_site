"use client";
import Image from "next/image";
import React from "react";

interface ImageListProps {
  images: string[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-row-3 gap-x-2 gap-y-2">
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-span-2 row-span-2">
        <Image
          src={images[0]}
          fill
          className="object-cover m-0 object-center rounded-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-3 col-end-4 row-start-1 row-end-2">
        <Image
          src={images[1]}
          fill
          className="object-cover m-0 object-center rounded-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-3 col-end-4 row-start-2 row-end-3">
        <Image
          src={images[2]}
          fill
          className="object-cover m-0 object-center rounded-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-1 col-end-2 row-start-3 row-end-4">
        <Image
          src={images[3]}
          fill
          className="object-cover m-0 object-center rounded-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-2 col-end-4 row-start-3 row-end-4">
        <Image
          src={images[4]}
          fill
          className="object-cover m-0 object-center rounded-md"
          alt="screenshot of project"
        />
      </div>
    </div>
  );
};

export default ImageList;

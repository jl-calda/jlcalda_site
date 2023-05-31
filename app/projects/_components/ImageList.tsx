"use client";
import Image from "next/image";
import { parse } from "path";
import React, { useCallback, useEffect, useState } from "react";
import { set } from "react-hook-form";

interface ImageListProps {
  images: string[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [secondImgIndex, setSecondImgIndex] = useState(1);
  const [thirdImgIndex, setThirdImgIndex] = useState(2);
  const [fourthImgIndex, setFourthImgIndex] = useState(3);
  const [fifthImgIndex, setFifthImgIndex] = useState(4);

  // const handleClick = useCallback(
  //   (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  //     const indexData = event.currentTarget.dataset.index;
  //     if (indexData) {
  //       const parsedIndex = parseInt(indexData);
  //       if (parsedIndex === 1) {
  //         setSecondImgIndex(featuredIndex);
  //         setFeaturedIndex(parsedIndex);
  //       }
  //       if (parsedIndex === 2) {
  //         setThirdImgIndex(featuredIndex);
  //         setFeaturedIndex(parsedIndex);
  //       }
  //       if (parsedIndex === 3) {
  //         setFourthImgIndex(featuredIndex);
  //         setFeaturedIndex(parsedIndex);
  //       }
  //       if (parsedIndex === 4) {
  //         setFifthImgIndex(featuredIndex);
  //         setFeaturedIndex(parsedIndex);
  //       }
  //     }
  //   },
  //   [featuredIndex]
  // );

  const [otherImages, setOtherImages] = useState(
    images
      .map((images, index) => (index !== featuredIndex ? index : null))
      .filter((index) => index !== 0)
  );

  console.log(otherImages);
  useEffect(() => {
    setOtherImages(
      images
        .map((images, index) => index)
        .filter((index) => index !== featuredIndex)
    );
    console.log(otherImages);
  }, [featuredIndex]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const indexData = event.currentTarget.dataset.index;
      if (indexData) {
        setFeaturedIndex(parseInt(indexData));
      }
    },
    [featuredIndex]
  );

  return (
    <div className="w-full h-full grid grid-cols-4 grid-row-4 gap-x-2 gap-y-2">
      <div className="cursor-pointer h-full w-full relative col-span-4 row-span-3">
        <Image
          src={images[featuredIndex]}
          fill
          className="object-cover m-0 object-center border border-black shadow-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-1 col-end-2 row-start-4 row-end-5">
        <Image
          data-index={otherImages[0]}
          onClick={handleClick}
          src={images[otherImages[0] || 0]}
          fill
          className="object-cover m-0 object-left border border-black shadow-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-2 col-end-3 row-start-4 row-end-5">
        <Image
          data-index={otherImages[1]}
          onClick={handleClick}
          src={images[otherImages[1] || 0]}
          fill
          className="object-cover m-0 object-top border border-black shadow-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-3 col-end-4 row-start-4 row-end-5">
        <Image
          data-index={otherImages[2]}
          onClick={handleClick}
          src={images[otherImages[2] || 0]}
          fill
          className="object-cover m-0 object-left border border-black shadow-md"
          alt="screenshot of project"
        />
      </div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer h-full w-full relative col-start-4 col-end-5 row-start-4 row-end-5">
        <Image
          data-index={otherImages[3]}
          onClick={handleClick}
          src={images[otherImages[3] || 0]}
          fill
          className="object-cover m-0 object-top border border-black shadow-md"
          alt="screenshot of project"
        />
      </div>
    </div>
  );
};

export default ImageList;

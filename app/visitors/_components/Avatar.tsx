"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import clsx from "clsx";

interface AvatarProps {
  name: string | null | undefined;
  image: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ name, image }) => {
  return (
    <>
      <div
        className={
          "flex flex-row justify-between px-2 space-x-2 items-center h-16"
        }
      >
        <div className="flex flex-row items-center justify-center space-x-2">
          <span className="text-sm">Hello!</span>
          <span className="hidden sm:block text-sm">nice seeing you here!</span>
          <div className="px-3 py-2 rounded-md flex flex-row items-center justify-center space-x-4">
            <Image
              src={image ? image : "/images/avatars/placeholder.png"}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-md border-2 border-white"
            />
            <span className="text-base font-semibold text-gray-600">
              {name}
            </span>
          </div>
        </div>
        <div
          onClick={() => signOut()}
          className="p-2 rounded-md cursor-pointer items-center justify-center flex hover:bg-gray-100"
        >
          <span>Logout</span>
          <RiLogoutBoxRLine
            size={30}
            className="hover:text-gray-900"
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import Button from "@/app/_components/Button";
import TooltipBox from "@/app/_components/TooltipBox";

type Props = {};

const SocialSignin = (props: Props) => {
  const session = useSession();

  const { data, status } = session;
  return (
    <div className="w-full shadow-sm bg-white px-2 h-[46px] rounded-tr-md rounded-tl-md border border-black flex flex-row space-x-2 items-center justify-between">
      {status === "authenticated" ? (
        <div>
          {" "}
          <div className="flex flex-row items-center gap-x-2">
            <Image
              src={
                data.user?.image
                  ? data.user.image
                  : "/images/avatars/placeholder.png"
              }
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-white m-0"
            />
            <p className="m-0">{data.user?.name}</p>
          </div>
        </div>
      ) : (
        <div className="text-base">Login to say hi.👋</div>
      )}

      {status === "authenticated" ? (
        <div>
          {" "}
          <TooltipBox text="Logout">
            <RiLogoutCircleRFill
              className="cursor-pointer p-2 hover:opacity-90 hover:scale-x-105"
              onClick={() => signOut()}
              size={40}
            />
          </TooltipBox>
        </div>
      ) : (
        <div className="flex flex-row space-x-1">
          <TooltipBox text="Login via google">
            <FcGoogle
              className="cursor-pointer p-2 hover:opacity-90 hover:scale-x-105"
              onClick={() => signIn("google")}
              size={40}
            />
          </TooltipBox>
          <TooltipBox text="Login via github">
            <FaGithub
              className="cursor-pointer p-2 hover:opacity-90 hover:scale-x-105"
              onClick={() => signIn("github")}
              size={40}
            />
          </TooltipBox>
        </div>
      )}
    </div>
  );
};

export default SocialSignin;

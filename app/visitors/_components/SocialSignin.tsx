"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Image from "next/image";

import Button from "@/app/_components/Button";
import TooltipBox from "@/app/_components/TooltipBox";

type Props = {};

const SocialSignin = (props: Props) => {
  const session = useSession();

  const { data, status } = session;
  return (
    <div className="w-full shadow-sm bg-white py-2 px-2 rounded-tr-md rounded-tl-md flex flex-row space-x-2 items-center justify-between">
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
        <div className="text-base">Login to to say hi.👋</div>
      )}

      {status === "authenticated" ? (
        <div>
          {" "}
          <TooltipBox text="Logout">
            <Button
              disabled={false}
              rounded
              icon={RiLogoutCircleRFill}
              secondary
              onClick={() => signOut()}
            />
          </TooltipBox>
        </div>
      ) : (
        <div className="flex flex-row space-x-1">
          <TooltipBox text="Login via google">
            <Button
              rounded
              icon={FaGoogle}
              secondary
              onClick={() => signIn("google")}
            />
          </TooltipBox>
          <TooltipBox text="Login via github">
            <Button
              rounded
              icon={FaGithub}
              secondary
              onClick={() => signIn("github")}
            />
          </TooltipBox>
        </div>
      )}
    </div>
  );
};

export default SocialSignin;

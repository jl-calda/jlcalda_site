import Button from "@/app/_components/Button";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

type Props = {};

const SocialSignin = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 h-20 justify-center">
      <span className="text-base">Login to to say hi.👋</span>
      <div className="flex flex-row space-x-1">
        <Button
          label="Google"
          icon={FaGoogle}
          secondary
          small
          edgy
          onClick={() => signIn("google")}
        />
        <Button
          label="Github"
          icon={FaGithubSquare}
          secondary
          small
          edgy
          onClick={() => signIn("github")}
        />
        <Button
          label="Email"
          icon={RiMailFill}
          secondary
          small
          edgy
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default SocialSignin;

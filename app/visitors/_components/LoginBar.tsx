"use client";

import Button from "@/app/_components/Button";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import SocialSignin from "./SocialSignin";

type Props = {};

const LoginBar = (props: Props) => {
  const { data, status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <Avatar
          name={data.user?.name}
          image={data.user?.image}
        />
      ) : (
        <SocialSignin />
      )}
    </>
  );
};

export default LoginBar;

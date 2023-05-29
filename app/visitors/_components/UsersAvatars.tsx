"use client";

import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

interface UsersAvatarsProps {
  users: User[];
}

const UsersAvatars: React.FC<UsersAvatarsProps> = ({ users }) => {
  const session = useSession();
  console.log(session);
  console.log(users);
  const otherUsers =
    session.status === "authenticated"
      ? users.filter((user) => user.email !== session?.data?.user?.email)
      : users;

  users.filter((user) => user.email !== session?.data?.user?.email);

  if (otherUsers.length === 0) return null;

  return (
    <div className="flex flex-row items-center justify-end">
      {otherUsers?.map((user: User, index: number) => (
        <Image
          key={crypto.randomUUID()}
          src={user.image || "/images/placeholder.png"}
          alt={user.name || "user"}
          width={50}
          height={50}
          className={clsx("rounded-full", index !== 0 && "-ml-4", "m-0")}
        />
      ))}
    </div>
  );
};

export default UsersAvatars;

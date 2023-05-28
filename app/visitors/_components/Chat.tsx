"use client";

import { User } from "@prisma/client";
import { Message } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface MessageProps {
  message: Message & { sender: User };
}

const Chat: React.FC<MessageProps> = ({ message }) => {
  const session = useSession();
  const isSender = session.data?.user?.email === message.sender.email;

  const ImageRender = (
    <Image
      src={message.sender.image as string}
      alt="user image"
      width={40}
      height={40}
      className="rounded-full m-0"
    />
  );

  const MessageRender = (
    <div className="flex flex-col space-y-1">
      <span className="text-xs font-bold">{message.sender.name}</span>
      <p className="">{message.body}</p>
    </div>
  );

  return (
    <div
      className={clsx(
        "flex flex-row items-center",
        isSender ? "justify-end" : "justify-start",
        "space-x-2 mr-4 px-2"
      )}
    >
      {isSender ? (
        <>
          {MessageRender}
          {ImageRender}
        </>
      ) : (
        <>
          {ImageRender}
          {MessageRender}
        </>
      )}
    </div>
  );
};

export default Chat;

import { User } from "@prisma/client";
import { Message } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface MessageProps {
  message: Message & { sender: User };
}

const Chat: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="flex flex-row items-center justify-end space-x-2 mr-4">
      <div className="flex flex-col space-y-1">
        <span className="text-xs font-bold">{message.sender.name}</span>
        <p className="text-xs font-light">{message.body}</p>
      </div>
      <Image
        src={message.sender.image as string}
        alt="user image"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
};

export default Chat;

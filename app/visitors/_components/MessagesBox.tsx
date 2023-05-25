import { Message, User } from "@prisma/client";
import React from "react";
import Chat from "./Chat";

interface MessagesBoxProps {
  messages: (Message & { sender: User })[];
}

const MessagesBox: React.FC<MessagesBoxProps> = ({ messages }) => {
  return (
    <div className="w-full px-2">
      <div className="rounded-sm h-[65vh] w-full overflow-scroll px-2 py-2 border border-gray-800">
        <div className="flex flex-col space-y-2 py-2">
          {messages.map((message) => (
            <Chat
              key={crypto.randomUUID()}
              message={message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesBox;

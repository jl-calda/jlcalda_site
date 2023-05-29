"use client";

import { Message, User } from "@prisma/client";
import { AiOutlineSend } from "react-icons/ai";
import React, { use, useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import SocialSignin from "./SocialSignin";
import {
  Field,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  set,
  useForm,
} from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface MessagesBoxProps {
  messages: (Message & { sender: User })[];
}

const MessagesBox: React.FC<MessagesBoxProps> = ({ messages }) => {
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register, setValue } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("api/visitors", data)
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch(() => {
        toast.error("Log in to send a message");
      })
      .finally(() => {
        setIsLoading(false);
        setValue("message", "");
        router.refresh();
      });
  };

  return (
    <div className="w-full overflow-hidden flex-col relative rounded-md bg-gray-100 flex-flex-col px-2 py-2 border-gray-800">
      <SocialSignin />
      <div className="h-4 w-full" />

      <div className="flex-1flex-col h-[57vh] sm:h-[65vh] space-y-2 overflow-y-scroll py-4">
        {/* <div className="flex-[0_0_auto] py-4 overflow-y-scroll"> */}
        {messages.map((message) => (
          <Chat
            key={crypto.randomUUID()}
            message={message}
          />
        ))}
        {/* </div> */}
        <div ref={bottomRef} />
      </div>
      <div className="h-4 w-full" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row space-x-2 rounded-bl-md rounded-br-md overflow-hidden bg-white"
      >
        <input
          disabled={isLoading}
          placeholder="Type a message"
          type="text"
          {...register("message", { required: true })}
          className="focus:outline-none flex-1 py-2 px-3 rounded-bl-md focus:border-gray-600 focus:border"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="border text-white bg-gray-800 hover:opacity-90 rounded-br-md px-3 py-2 border-gray-800 flex flex-row items-center space-x-2 focus:outline-none"
        >
          <span className="m-0">Send</span>
          <AiOutlineSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default MessagesBox;

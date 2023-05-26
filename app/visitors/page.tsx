import React from "react";
import MessagesBox from "./_components/MessagesBox";
import Button from "../_components/Button";
import LoginBar from "./_components/LoginBar";
import Section from "../_components/Section";
import MessageInput from "./_components/MessageInput";
import { get } from "http";
import getMessages from "../_actions/getMessages";

type Props = {};

export const revalidate = 10;

const VisitorsPage = async (props: Props) => {
  // const messages = await fetch("http://localhost:3000/api/messages",{revalidate})
  const messages = await getMessages();

  console.log(messages);
  return (
    <div className="flex flex-col space-y-2 prose">
      <LoginBar />
      <MessagesBox messages={messages} />
      <MessageInput />
    </div>
  );
};

export default VisitorsPage;

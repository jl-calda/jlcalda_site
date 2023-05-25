import React from "react";
import MessagesBox from "./_components/MessagesBox";
import Button from "../_components/Button";
import LoginBar from "./_components/LoginBar";
import Section from "../_components/Section";
import MessageInput from "./_components/MessageInput";

type Props = {};

const VisitorsPage = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <LoginBar />
      <MessagesBox />
      <MessageInput />
    </div>
  );
};

export default VisitorsPage;

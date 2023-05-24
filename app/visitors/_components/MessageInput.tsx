import Input from "@/app/_components/Input";
import React from "react";

type Props = {};

const MessageInput = (props: Props) => {
  return (
    <form>
      <Input
        id="body"
        label="body"
        placeholder="Say hi..."
      />
    </form>
  );
};

export default MessageInput;

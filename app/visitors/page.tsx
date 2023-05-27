import { Merriweather } from "next/font/google";

import getMessages from "../_actions/getMessages";

import MessagesBox from "./_components/MessagesBox";
import MessageInput from "./_components/MessageInput";
import SocialSignin from "./_components/SocialSignin";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export const revalidate = 10;

const VisitorsPage = async () => {
  const messages = await getMessages();

  console.log(messages);
  return (
    <div className="prose min-w-full h-full px-2 py-4 flex flex-col items-start space-y-2 bg-stone-50">
      <h2 className={`${merriweather.className} my-2`}>Visitors' Page</h2>
      <div className="flex-1 w-full h-auto">
        <MessagesBox messages={messages} />
      </div>
    </div>
  );
};

export default VisitorsPage;

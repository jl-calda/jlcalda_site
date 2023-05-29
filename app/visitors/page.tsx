import { Merriweather } from "next/font/google";

import getMessages from "../_actions/getMessages";

import MessagesBox from "./_components/MessagesBox";
import SocialSignin from "./_components/SocialSignin";
import getUsers from "../_actions/getUsers";
import UsersAvatars from "./_components/UsersAvatars";

const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["700"],
});

export const revalidate = 10;

const VisitorsPage = async () => {
  const messages = await getMessages();
  const users = await getUsers();

  console.log(messages);
  return (
    <div className="prose min-w-full h-full flex flex-col items-start space-y-2 bg-stone-50">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className={`${merriweather.className} my-2`}>Visitors' Page</h2>
        <UsersAvatars users={users} />
      </div>
      <div className="flex-1 w-full h-auto">
        <MessagesBox messages={messages} />
      </div>
    </div>
  );
};

export default VisitorsPage;

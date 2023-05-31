import { Merriweather } from "next/font/google";

import getMessages from "../_actions/getMessages";

import MessagesBox from "./_components/MessagesBox";
import SocialSignin from "./_components/SocialSignin";
import getUsers from "../_actions/getUsers";
import UsersAvatars from "./_components/UsersAvatars";
import clsx from "clsx";

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
      <div className="w-full flex flex-row justify-between items-center py-2">
        <div className="px-2 py-1 bg-gray-800 text-white flex-0 max-w-fit">
          <h2 className={clsx(merriweather.className, "text-white", "m-0")}>
            {`Visitors' Messages`}
          </h2>
        </div>
        <UsersAvatars users={users} />
      </div>
      <div className="flex-1 w-full h-auto">
        <MessagesBox messages={messages} />
      </div>
    </div>
  );
};

export default VisitorsPage;

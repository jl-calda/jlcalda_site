import React from "react";
import { topics } from "../_data";

const TopicList = () => {
  return (
    <div className="relative bg-gray-200 w-full text-gray-800 p-2 border-2 border-black">
      <h5 className="uppercase tracking-wider font-bold max-w-fit">Topics</h5>
      <ul className="grid grid-cols-3 sm:grid-cols-4 list-none m-0 p-0">
        {topics.map((topic) => (
          <li
            key={crypto.randomUUID()}
            className="m-0 cursor-pointer text-gray-600 font-bold text-sm py-1 px-2"
          >
            {topic}
          </li>
        ))}
      </ul>
      <div className="absolute h-6 w-12 bg-white top-2 left-24 z-10"></div>
    </div>
  );
};

export default TopicList;

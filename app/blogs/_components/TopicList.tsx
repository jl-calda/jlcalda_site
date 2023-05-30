import React from "react";
import { topics } from "../_data";

const TopicList = () => {
  return (
    <div className="bg-gray-800 w-full text-white p-2">
      <h5 className="uppercase tracking-wider">Topics</h5>
      <ul className="grid grid-cols-3 list-none m-0">
        {topics.map((topic) => (
          <li className="m-0 font-light text-sm py-1 px-2">{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;

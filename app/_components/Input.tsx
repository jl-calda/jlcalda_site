"use client";
import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder="placeholder"
      className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
    />
  );
};

export default Input;

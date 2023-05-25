"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  required,
  register,
  errors,
  placeholder,
  disabled,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register(id, { required })}
      className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
    />
  );
};

export default Input;

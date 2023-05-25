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
      className="w-full p-2 border text-base border-gray-800 rounded-sm font-light focus:outline-none focus:outline-teal-500"
    />
  );
};

export default Input;

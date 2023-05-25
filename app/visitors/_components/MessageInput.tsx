"use client";

import {
  Field,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

import Input from "@/app/_components/Input";
import React, { useState } from "react";
import Button from "@/app/_components/Button";
import { useSession } from "next-auth/react";

const MessageInput = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  return (
    <form className="flex flex-row px-6 space-x-4 py-4">
      <Input
        register={register}
        disabled={session.status === "authenticated" ? isLoading : true}
        id="body"
        placeholder="Say hi..."
        errors={errors}
      />
      <Button
        disabled={session.status === "authenticated" ? isLoading : true}
        type="submit"
        label="Send"
        small
        edgy
      />
    </form>
  );
};

export default MessageInput;

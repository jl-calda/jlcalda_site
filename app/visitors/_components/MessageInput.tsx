"use client";

import {
  Field,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  set,
  useForm,
} from "react-hook-form";

import Input from "@/app/_components/Input";
import React, { useState } from "react";
import Button from "@/app/_components/Button";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const MessageInput = () => {
  const router = useRouter();
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

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsLoading(true);
    console.log(data);

    axios
      .post("/api/visitors", data)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        setIsLoading(false);
        router.refresh();
        setValue("message", "");
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row px-2 space-x-2 first-letter:py-4"
    >
      <Input
        register={register}
        disabled={session.status === "authenticated" ? false : true}
        id="message"
        placeholder="Say hi..."
        errors={errors}
      />
      <Button
        disabled={session.status === "authenticated" ? false : true}
        type="submit"
        label="Send"
        small
        edgy
      />
    </form>
  );
};

export default MessageInput;

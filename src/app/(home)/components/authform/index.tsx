"use client";
import React from "react";
import useAuth from "./hooks/use-auth";
import Input from "@/components/Input";
import LoadingModal from "@/components/modals/LoadingModal";
import Button from "@/components/Button";

const AuthForm = () => {
  const {
    variant,
    toggleVariant,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
  } = useAuth();

  return (
    <div className="border-0 ring-1 ring-inset ring-gray-300 px-4 py-4 bg-white shadow-lg sm:rounded-lg sm:px-10">
      <div className="text-2xl text-center w-full font-semibold">
        {variant === "LOGIN" ? "관리자 로그인" : "관리자 생성"}
      </div>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          id="userName"
          placeholder="관리자 계정 입력"
        />
        <Input
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          id="password"
          type="password"
          placeholder="비밀번호 입력"
        />
        <Button disbaled={isLoading} fullWidth type="submit">
          {variant === "LOGIN" ? "관리자 로그인" : "관리자 생성"}
        </Button>
      </form>

      <div className="text-sm mt-2 flex flex-row space-x-2">
        <div className="text-gray-500">
          {variant === "LOGIN" ? "처음 사용하시나요?" : "이미 계정이 있나요?"}
        </div>
        <div
          onClick={toggleVariant}
          className="underline cursor-pointer text-center text-sky-300 transition hover:text-sky-400 "
        >
          {variant === "LOGIN" ? "관리자 생성" : "로그인"}
        </div>
      </div>
      <LoadingModal show={isLoading} />
    </div>
  );
};

export default AuthForm;

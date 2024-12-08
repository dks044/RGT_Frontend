"use client";
import axiosInstance from "@/app/lib/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUserStore from "@/store/useUserStore";
import toast from "react-hot-toast";
import { Variant } from "@/type/type";
import { useRouter } from "next/navigation";
import { userSchema } from "@/schemas/user";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const { setUser } = useUserStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const toggleVariant = () => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const url = variant === "LOGIN" ? `/api/auth/login` : `/api/auth/signup`;
      const response = await axiosInstance.post(url, data);

      // 로그인|회원가입 응답 처리
      const parsedResponse = userSchema.parse(response.data);
      setUser(parsedResponse);

      if (variant === "LOGIN") {
        router.push("/books");
      }
      toast("로그인에 성공했어요");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          variant === "LOGIN"
            ? "로그인이 실패했습니다."
            : "계정 생성이 실패했습니다."
        );
      } else {
        toast.error("서버에서 에러가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    variant,
    toggleVariant,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
  };
};

export default useAuth;

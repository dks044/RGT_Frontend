"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBook } from "@/hooks/use-Book";

import { use } from "react";
import useUpdateBook from "../hooks/use-Update-Book";

export interface BookEditPageProps {
  params: Promise<{ id: string }>;
}

const BookEditPage = ({ params }: BookEditPageProps) => {
  const router = useRouter();
  const { id } = use(params);
  const { book, isLoading, isError } = useBook(Number(id));
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: isUpdating,
    setValue,
  } = useUpdateBook(Number(id));

  useEffect(() => {
    if (book) {
      // 책 정보가 로딩된 후, 폼에 값을 설정
      setValue("bookName", book.bookName);
      setValue("author", book.author);
      setValue("description", book.description);
      setValue("price", book.price);
      setValue("amount", book.amount);
      setValue("publicationDate", book.publicationDate);
    }
  }, [book, setValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>책 정보를 불러오는데 실패했습니다.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">책 정보 수정</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700">책 이름</label>
          <input
            {...register("bookName", { required: "책 이름은 필수입니다." })}
            className={`border rounded p-2 w-full ${
              errors.bookName ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">저자</label>
          <input
            {...register("author", { required: "저자는 필수입니다." })}
            className={`border rounded p-2 w-full ${
              errors.author ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">설명</label>
          <textarea
            {...register("description")}
            className={`border rounded p-2 w-full ${
              errors.description ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">가격</label>
          <input
            type="number"
            {...register("price", {
              valueAsNumber: true,
              required: "가격은 필수입니다.",
            })}
            className={`border rounded p-2 w-full ${
              errors.price ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">수량</label>
          <input
            type="number"
            {...register("amount", {
              valueAsNumber: true,
              required: "수량은 필수입니다.",
            })}
            className={`border rounded p-2 w-full ${
              errors.amount ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">출판일</label>
          <input
            type="date"
            {...register("publicationDate", {
              required: "출판일은 필수입니다.",
            })}
            defaultValue={
              book?.publicationDate
                ? new Date(book.publicationDate).toISOString().split("T")[0]
                : ""
            }
            className={`border rounded p-2 w-full ${
              errors.publicationDate ? "border-red-500" : ""
            }`}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isUpdating}
        >
          {isUpdating ? "수정 중..." : "수정하기"}
        </button>
      </form>
      <button
        onClick={() => router.push("/books")}
        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default BookEditPage;

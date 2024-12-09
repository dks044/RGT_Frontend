"use client";
import { useBook } from "@/hooks/useBook";
import { useRouter } from "next/navigation";
import React, { use } from "react";

export interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

const BookDetailPage = ({ params }: BookDetailPageProps) => {
  const router = useRouter();
  const { id } = use(params);
  const { book, isLoading, isError } = useBook(Number(id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-4 text-red-500">
        책 정보를 불러오는데 실패했습니다.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">{book?.bookName}</h1>
        <p className="text-gray-700 mb-4">저자: {book?.author}</p>
        <p className="text-gray-700 mb-4">가격: {book?.price} 원</p>
        <p className="text-gray-700 mb-4">
          출판일:{" "}
          {book?.publicationDate
            ? new Date(book.publicationDate).toLocaleDateString()
            : "정보 없음"}
        </p>
        <p className="text-gray-700 mb-4">수량: {book?.amount}</p>
      </div>
      <button
        onClick={() => router.push("/books")}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default BookDetailPage;

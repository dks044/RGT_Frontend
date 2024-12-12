"use client";
import React from "react";
import { Book } from "@/schemas/book";
import LoadingModal from "@/components/modals/LoadingModal";
import DebouncedInput from "@/components/DebouncedInput";
import { useRouter } from "next/navigation";
import { useBooks } from "@/hooks/use-Books";

const BookTable: React.FC = () => {
  const router = useRouter();
  const {
    books,
    totalPages,
    isLoading,
    isError,
    handleTermChange,
    page,
    term,
  } = useBooks();

  if (isLoading) return <LoadingModal show={isLoading} />;
  if (isError)
    return (
      <div className="text-center py-4 text-red-500">
        데이터를 불러오는데 실패했어요
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <DebouncedInput
        value={term ? term : ""}
        onChange={(newTerm) => handleTermChange(newTerm)}
        placeholder="책 검색"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 transition">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b  ">책 이름</th>
              <th className="py-2 px-4 border-b">저자</th>
              <th className="py-2 px-4 border-b">수량</th>
              <th className="py-2 px-4 border-b">가격</th>
              <th className="py-2 px-4 border-b">출판일</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
              <tr key={book.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{book?.id}</td>
                <td
                  onClick={() => router.push(`/books/${book?.id}`)}
                  className="py-2 px-4 border-b underline cursor-pointer text-gray-700 hover:text-gray-900 transition text-center"
                >
                  {book.bookName}
                </td>
                <td className="py-2 px-4 border-b text-center">{book?.author}</td>
                <td className="py-2 px-4 border-b text-center">{book?.amount}</td>
                <td className="py-2 px-4 border-b text-center">{book?.price} 원</td>
                <td className="py-2 px-4 border-b text-center">
                  {book?.publicationDate
                    ? new Date(book.publicationDate).toLocaleDateString()
                    : "정보 없음"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => handleTermChange(term ? term : "", page - 1)}
          className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
        >
          이전
        </button>
        <span>
          페이지 {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => handleTermChange(term ? term : "", page + 1)}
          className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default BookTable;

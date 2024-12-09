"use client";
import React from "react";
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/schemas/book";
import LoadingModal from "@/components/modals/LoadingModal";
import DebouncedInput from "@/components/DebouncedInput";

const BookTable: React.FC = () => {
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
        placeholder="Search books..."
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Book Name</th>
              <th className="py-2 px-4 border-b">Author</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
              <tr key={book.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{book.id}</td>
                <td className="py-2 px-4 border-b">{book.bookName}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.amount}</td>
                <td className="py-2 px-4 border-b">{book.price} 원</td>
                <td className="py-2 px-4 border-b">
                  {new Date(book.publicationDate).toLocaleDateString()}
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
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => handleTermChange(term ? term : "", page + 1)}
          className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookTable;

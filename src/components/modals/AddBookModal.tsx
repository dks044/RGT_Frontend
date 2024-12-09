import React from "react";
import ModalTemplate from "./ModalTemplate";
import useCreateBook from "@/app/books/[id]/hooks/use-Create-Book";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useCreateBook();

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        <h2 className="text-2xl mb-4">새 도서 등록</h2>

        <div className="mb-4">
          <label htmlFor="bookName" className="block mb-2">
            책 이름
          </label>
          <input
            id="bookName"
            {...register("bookName", { required: "책 이름은 필수입니다." })}
            className={`border p-2 w-full ${
              errors.bookName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.bookName && (
            <p className="text-red-500">{errors.bookName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block mb-2">
            저자
          </label>
          <input
            id="author"
            {...register("author", { required: "저자는 필수입니다." })}
            className={`border p-2 w-full ${
              errors.author ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">
            수량
          </label>
          <input
            id="amount"
            type="number"
            {...register("amount", { required: "수량은 필수입니다." })}
            className={`border p-2 w-full ${
              errors.amount ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">
            가격
          </label>
          <input
            id="price"
            type="number"
            {...register("price", { required: "가격은 필수입니다." })}
            className={`border p-2 w-full ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="publicationDate" className="block mb-2">
            출판일
          </label>
          <input
            id="publicationDate"
            type="date"
            {...register("publicationDate", {
              required: "출판일은 필수입니다.",
            })}
            className={`border p-2 w-full ${
              errors.publicationDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.publicationDate && (
            <p className="text-red-500">{errors.publicationDate.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
        >
          {isLoading ? "등록 중..." : "도서 등록"}
        </button>
      </form>
    </ModalTemplate>
  );
};

export default AddBookModal;

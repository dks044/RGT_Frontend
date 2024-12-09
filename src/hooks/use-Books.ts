import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useBooksSearchParams } from "./use-books-search-Params";
import axios from "@/lib/axios";
import { bookSchema } from "@/schemas/book";

const fetchBooks = async (searchTerm: string, page: number) => {
  const response = await axios.get("/api/books", {
    params: {
      searchTerm,
      page,
    },
  });
  console.log("API response:", response.data);
  return response.data;
};

export const useBooks = () => {
  const { page, term, handleTermChange } = useBooksSearchParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", { page, term }],
    queryFn: async () => await fetchBooks(term || "", page - 1),
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  return {
    books: data?.content
      ? data.content.map((book: any) => bookSchema.parse(book))
      : [],
    totalPages: data?.totalPages || 0,
    isLoading,
    isError,
    handleTermChange,
    page,
    term,
  };
};

// hooks/useBooks.ts
import axios from "@/lib/axios"; // axios 인스턴스 경로 확인
import { useProductsSearchParams } from "./useProductsSearchParams"; // 검색어 커스텀 훅
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchBooks = async (searchTerm: string, page: number, size: number) => {
  const response = await axios.get("/api/books", {
    params: {
      searchTerm,
      page,
      size,
    },
  });
  return response.data;
};

export const useBooks = () => {
  const { page, term, handleTermChange } = useProductsSearchParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", term, page], // 쿼리 키
    queryFn: () => fetchBooks(term, page - 1, 10),
    placeholderData: keepPreviousData,
  });

  return {
    books: data?.content || [],
    totalPages: data?.totalPages || 0,
    isLoading,
    isError,
    handleTermChange,
    page,
    term,
  };
};

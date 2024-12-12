import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { bookSchema } from "@/schemas/book";

const fetchBookById = async (id: number) => {
  const response = await axios.get(`/api/books/${id}`);
  return response.data;
};

export const useBook = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    book: data ? bookSchema.parse(data) : null,
    isLoading,
    isError,
  };
};

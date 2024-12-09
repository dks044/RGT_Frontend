import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios"; // Axios 인스턴스
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// 책 삭제 커스텀 훅
const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await axios.delete(`/api/books/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success("책이 성공적으로 삭제되었습니다!");
      router.push("/books");
    },
    onError: (error) => {
      console.error(error);
      toast.error("책 삭제에 실패했습니다.");
    },
  });

  return {
    deleteBook: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useDeleteBook;

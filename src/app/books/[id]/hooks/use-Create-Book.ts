import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Book } from "@/schemas/book";
import toast from "react-hot-toast";
import { useBooks } from "@/hooks/use-Books";

const useCreateBook = () => {
  const { page, term } = useBooks();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    defaultValues: {
      bookName: "",
      author: "",
      amount: 0,
      description: "",
      price: 0,
      publicationDate: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: Book) => {
      const response = await axios.post("/api/books", data);
      return response.data;
    },
    onSuccess: () => {
      // 책 목록 쿼리를 무효화하여 새로고침
      queryClient.invalidateQueries({ queryKey: ["books", page, term] });
      toast.success("책이 성공적으로 추가되었습니다!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("책 추가에 실패했습니다.");
    },
  });

  const onSubmit: SubmitHandler<Book> = async (data) => {
    await mutation.mutateAsync(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: mutation.isPending,
  };
};

export default useCreateBook;

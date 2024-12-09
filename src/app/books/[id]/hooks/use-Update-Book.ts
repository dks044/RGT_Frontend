import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";

import toast from "react-hot-toast";
import { updateBookSchema } from "@/schemas/book";

const useUpdateBook = (bookId: number) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
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
    mutationFn: async (data: any) => {
      const response = await axios.put(`/api/books/${bookId}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["book", bookId] });
      toast.success("책 정보가 성공적으로 수정되었습니다!");
    },
    onError: (error) => {
      console.error(error);
      toast.error("책 수정에 실패했습니다.");
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await mutation.mutateAsync(updateBookSchema.parse(data));
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: mutation.isPending,
    setValue,
  };
};

export default useUpdateBook;

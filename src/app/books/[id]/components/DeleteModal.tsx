"use client";

import Button from "@/components/Button";
import ModalTemplate from "@/components/modals/ModalTemplate";
import useDeleteBook from "../hooks/use-Delete-Book";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookId: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  bookId,
}) => {
  const { deleteBook, isLoading } = useDeleteBook();

  const handleDelete = () => {
    deleteBook(bookId);
    onClose();
  };

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <div className="flex-1 h-100">
        <p className="mt-1 text-sm leading-6 text-gray-600">
          책 데이터를 삭제하시겠습니까?
        </p>

        <div className="flex items-center justify-end mt-6 gap-x-6">
          <Button disbaled={isLoading} secondary onClick={onClose}>
            취소
          </Button>
          <Button
            danger
            disbaled={isLoading}
            type="button"
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default DeleteModal;

import { useCallback, useEffect, useState } from "react";
import useUpdateBook from "../[id]/hooks/use-Update-Book";

const useTableMode = () => {
  const [tableIndex, setTableIndex] = useState<number[]>([]);
  const { setBookId } = useUpdateBook();

  useEffect(() => {
    if (tableIndex.length > 0) {
      setBookId(tableIndex[tableIndex.length - 1]);
    } else {
      setBookId(null);
    }
  }, [tableIndex, setBookId]);

  const handleIndex = useCallback((index: number) => {
    setTableIndex((prev) => {
      return prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
    });
  }, []);

  return { tableIndex, handleIndex };
};

export default useTableMode;

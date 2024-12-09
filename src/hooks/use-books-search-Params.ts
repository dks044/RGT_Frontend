"use client";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useCallback } from "react";

export const useBooksSearchParams = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger);
  const [q, setQ] = useQueryState("q", parseAsString);

  const handleTermChange = useCallback(
    (term: string, newPage?: number) => {
      if (q === term && newPage === undefined) return;
      setQ(term);
      setPage(newPage ? newPage : 1);
    },
    [q, setPage, setQ]
  );

  return {
    page: page || 1,
    setPage,
    term: q,
    handleTermChange,
  };
};

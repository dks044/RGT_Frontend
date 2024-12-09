// hooks/useProductsSearchParams.ts

import { parseAsInteger, parseAsString } from "some-parsing-library"; // 실제 사용 중인 파싱 라이브러리로 수정

export const useProductsSearchParams = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({
      history: "push",
    })
  );

  const [q, setQ] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      history: "push",
    })
  );

  const handleTermChange = async (term: string) => {
    if (q === term) return;
    await setQ(term); // 검색어 변경
    await setPage(1); // 페이지를 1로 초기화
  };

  return {
    page,
    setPage,
    term: q,
    handleTermChange,
  };
};

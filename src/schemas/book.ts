import { z } from "zod";

export const bookSchema = z.object({
  id: z.number(),
  bookName: z.string(), // 책 제목
  author: z.string(), // 저자
  amount: z.string().transform((val) => parseInt(val, 10)), // 수량 (문자열에서 정수로 변환)
  description: z.string().optional(), // 설명 (선택적)
  price: z.number().int().nonnegative(), // 가격 (정수, 음수가 아님)
  publicationDate: z.string().refine(
    (date) => {
      // 날짜 형식 검증 (ISO 8601)
      return !isNaN(Date.parse(date));
    },
    {
      message: "Invalid date format",
    }
  ), // 출판일 (유효한 날짜 형식)
});

// TypeScript의 타입 추론
export type Book = z.infer<typeof bookSchema>;

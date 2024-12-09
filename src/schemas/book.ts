import { z } from "zod";

export const bookSchema = z.object({
  id: z.number(),
  bookName: z.string(),
  author: z.string().nullable().optional(),
  amount: z.number(),
  description: z.string().nullable().optional(),
  price: z.number().int().nonnegative(),
  publicationDate: z
    .string()
    .nullable()
    .optional()
    .refine((date) => !date || !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
});

export type Book = z.infer<typeof bookSchema>;

// 수정 스키마
export const updateBookSchema = z.object({
  bookName: z.string().optional(),
  author: z.string().optional(),
  amount: z.number(),
  description: z.string().optional(),
  price: z
    .union([
      z.number().int().nonnegative(),
      z.string().transform((val) => parseFloat(val)),
    ])
    .optional(),
  publicationDate: z
    .string()
    .optional()
    .refine(
      (date) => {
        return !date || !isNaN(Date.parse(date));
      },
      {
        message: "Invalid date format",
      }
    ),
});

export type UpdateBook = z.infer<typeof updateBookSchema>;

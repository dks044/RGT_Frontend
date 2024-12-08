import { z } from "zod";

export const userRoleSchema = z.enum(["USER", "ADMIN"]);

// 사용자 스키마 정의
export const userSchema = z.object({
  userName: z.string(),
  role: userRoleSchema,
});

// 사용자 타입 추론
export type User = z.infer<typeof userSchema>;

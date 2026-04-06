import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must have at most 255 characters"),
  password: z
    .string()
    .min(8, "Password must have at least 8 characters")
    .max(72, "Password must have at most 72 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

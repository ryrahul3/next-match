import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().length(8, "Password must be at least 8 charaters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

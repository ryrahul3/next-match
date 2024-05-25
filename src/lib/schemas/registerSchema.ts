import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().length(8, "Password must be at least 8 charaters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

import { z } from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string().min(3),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const createBlog = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlog = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type SignUpInput = z.infer<typeof signupInput>;

export type SignInInput = z.infer<typeof signinInput>;

export type createBlogInput = z.infer<typeof createBlog>;

export type updateBlogInput = z.infer<typeof updateBlog>;

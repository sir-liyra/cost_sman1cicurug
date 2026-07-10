import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email harus valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export const registerSchema = z
  .object({
    nama: z.string().min(3, 'Nama minimal 3 karakter'),
    email: z.string().email('Email harus valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    confirmPassword: z.string(),
    tahunAnjak: z.enum(['X', 'XI', 'XII']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password tidak cocok',
    path: ['confirmPassword'],
  });

export const eventSchema = z.object({
  title: z.string().min(3, 'Title minimal 3 karakter'),
  description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
  date: z.string().datetime(),
  time: z.string(),
  location: z.string().min(3),
  category: z.enum(['workshop', 'meetup', 'kompetisi', 'seminar']),
  capacity: z.number().min(1),
});

export const blogSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  content: z.string().min(50),
  category: z.string().min(3),
  tags: z.array(z.string()).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type EventInput = z.infer<typeof eventSchema>;
export type BlogInput = z.infer<typeof blogSchema>;

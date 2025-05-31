import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  age: z.number().min(0, 'Age must be positive'),
  dietaryPreferences: z.string().optional(),
  allergies: z.string().optional(),
});
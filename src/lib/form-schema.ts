import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
    messageTitle: z.string().min(1, { message: 'Message title is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
  guestName: z.string().min(1, { message: 'Guest name is required' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
});

export type TFormSchema = z.infer<typeof formSchema>;

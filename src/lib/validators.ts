import { z } from 'zod'

export const CreateUserValidator = z.object({
    address: z.string().optional().nullish(),
    phone: z.string().optional().nullish(),
    email: z.string({ required_error: "Email is required" }).email("Provide a valid email address"),
    password: z.string({ required_error: "Password is required" }).min(3).max(255),
    username: z.string({ required_error: "Username is required" }).min(3).max(255),
    img: z.string().optional().nullish(),
    isActive: z.coerce.boolean().default(true).optional(),
    isAdmin: z.coerce.boolean().default(false).optional(),
})

export type CreateUserRequest = z.infer<typeof CreateUserValidator>


import * as z from "zod";

export const editUserSchema = z.object({
    name: z
        .string()
        .min(4, "Name must be at least 4 characters"),
    email: z
        .string()
        .email("Invalid email address"),
    phone: z
        .string()
        .length(11, "Phone number must be exactly 11 digits")
        .regex(/^[0-9]+$/, "Phone number must contain only digits")
        .optional(),
    location: z
        .string()
        .optional(),
    role: z
        .enum(["admin", "user"])

});

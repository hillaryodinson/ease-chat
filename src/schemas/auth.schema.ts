import z from "zod";

export const authSchema = z.object({
	email: z.string().email().min(1, "Email field is required"),
	otp: z.string().min(7),
});

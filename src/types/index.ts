import { z } from "zod";
import { authSchema } from "../schemas/auth.schema";
import {
	LoginSchema,
	ProfileSchema,
	RegisterSchema,
} from "@/schemas/user.schema";

export type AuthType = z.infer<typeof authSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
export type RegistrationType = z.infer<typeof RegisterSchema>;
export type UpdateProfileType = z.infer<typeof ProfileSchema>;

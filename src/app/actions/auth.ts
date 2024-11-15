import { signIn } from "@/config/auth";
import { db } from "@/config/db";
import { AuthType } from "@/types";

export const doLogin = async (credentials: AuthType) => {
	return await signIn("credentials", { ...credentials });
};

export const sendOTP = async (email: string) => {
	//check if user with email exists
	const user = await db.user.findUnique({
		where: {
			email,
		},
	});
	//if user account has a phone number if exists generate an otp
	if (!user || !user.phone)
		throw new Error(
			"User account is yet to be onboarded please contact administrator"
		);

	//send otp to user
};

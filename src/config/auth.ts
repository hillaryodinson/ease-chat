import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthConfig } from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/config/db";
import { Adapter } from "next-auth/adapters";
import { User } from "@prisma/client";
import { sendMail, template } from "@/lib/mailer";

export const { handlers, signIn, signOut, auth } = NextAuth({
	...AuthConfig,

	providers: [
		CredentialsProvider({
			credentials: {
				email: { label: "Email", type: "email" },
				otp: { label: "OTP", type: "text" },
			},

			async authorize(credentials): Promise<User | null> {
				try {
					if (!credentials?.email || !credentials?.otp) {
						throw new Error("Invalid credentials");
					}
					const { email, otp } = credentials;

					const user = await db.user.findFirst({
						where: { email, otp },
					}); //do user authenthication here;

					if (!user) {
						return null;
					}

					//send notification email to user
					const subject = "Login Successful";
					const message = template(
						subject,
						`<p>Dear ${user?.name},</p><p>you have successfully logged in. </p>`
					);
					await sendMail(user?.email as string, subject, message);

					return user;
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		}),
	],
	adapter: PrismaAdapter(db) as Adapter,
	callbacks: {
		jwt({ token }) {
			// console.log(token, "USER: ", user);
			return token;
		},
		async session({ session }) {
			//console.log(session);
			return session;
		},
	},
});

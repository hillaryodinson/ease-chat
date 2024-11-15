"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schemas/auth.schema";
import { AuthType } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { redirect, useRouter } from "next/navigation";
import { doLogin } from "@/app/actions/auth";

const LoginForm = () => {
	const [isOtpSent, setIsOtpSent] = useState(false);
	const router = useRouter();
	const form = useForm<AuthType>({
		resolver: zodResolver(authSchema),
		// mode: "onBlur",
		defaultValues: {
			email: "",
			otp: "",
		},
	});

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate sending OTP
		console.log(`OTP sent to ${form.getValues("email")}`);
		setIsOtpSent(true);
	};

	const handleSubmit = async (data: AuthType) => {
		const { otp } = data;
		// Simulate OTP verification
		if (otp === "1234567") {
			const user = await doLogin(data);
			console.log(user);
		} else {
			form.setError("otp", { message: "Invalid OTP please input valid OTP" });
		}
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>{isOtpSent ? "Enter OTP" : "Login"}</CardTitle>
				<CardDescription className="border p-4">
					{isOtpSent
						? "Please enter the OTP sent to your phone (08166***890)"
						: "Enter your email to receive an OTP"}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={
							isOtpSent ? form.handleSubmit(handleSubmit) : handleEmailSubmit
						}
						className="space-y-4"
						method="post">
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="name@example.com"
											{...field}
											readOnly={isOtpSent}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isOtpSent && (
							<FormField
								name="otp"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl className="!justify-center">
											<InputOTP
												maxLength={7}
												{...field}
												className="!justify-center">
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
												</InputOTPGroup>
												<InputOTPSeparator />
												<InputOTPGroup>
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
													<InputOTPSlot index={6} />
												</InputOTPGroup>
											</InputOTP>
											{/* <FormMessage /> */}
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}
						<Button type="submit" className="w-full">
							{isOtpSent ? "Verify OTP" : "Send OTP"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default LoginForm;

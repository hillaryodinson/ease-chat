import { Metadata } from "next";
import React from "react";
import LoginForm from "./_components/login-form";

export const metadata: Metadata = {
	title: "Login Page",
};

const LoginPage = () => {
	return <LoginForm />;
};

export default LoginPage;

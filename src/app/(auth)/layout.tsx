import Logo from "@/components/custom/logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col flex-1 justify-center items-center space-y-4">
			<Logo />
			{children}
		</div>
	);
};

export default AuthLayout;

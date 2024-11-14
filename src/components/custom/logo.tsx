import { cn } from "@/lib/utils";
import { MessagesSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
	iconSize = 20,
	fontSize = "2xl",
}: {
	iconSize?: number;
	fontSize?: string;
}) => {
	return (
		<Link
			href={"/"}
			className={cn(
				"text-2xl font-extrabold flex items-center gap-2",
				fontSize
			)}>
			<div className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-600 p-2">
				<MessagesSquareIcon size={iconSize} className="stroke-white" />
			</div>
			<div>
				<span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
					Ease
				</span>
				<span className="text-stone-700">Chat</span>
			</div>
		</Link>
	);
};

export default Logo;

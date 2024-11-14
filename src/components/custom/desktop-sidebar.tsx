"use client";
import { Book, HomeIcon, MessageCircleMore, Power } from "lucide-react";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const routes = [
	{
		href: "/",
		label: "Home",
		icon: HomeIcon,
	},
	{
		href: "/chats",
		label: "Chats",
		icon: MessageCircleMore,
	},
	{
		href: "/knowledge-base",
		label: "Knowledge Base",
		icon: Book,
	},
	{
		href: "/logout",
		label: "Log out",
		icon: Power,
	},
];
const DesktopSidebar = () => {
	const pathname = usePathname();
	const activeRoute =
		routes.find(
			(route) => route.href.length > 0 && pathname.includes(route.href)
		) || routes[0];

	return (
		<div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 text-muted-foreground border-r-2 border-separate">
			<div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
				<Logo />
			</div>
			<div className="flex flex-col p-2">
				{routes.map((route) => (
					<Link
						href={route.href}
						key={route.label}
						className={buttonVariants({
							variant:
								activeRoute.href === route.href
									? "sidebarItemActive"
									: "sidebarItem",
						})}>
						<route.icon size={20} /> {route.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default DesktopSidebar;

"use client";
import {
	Book,
	HomeIcon,
	MenuIcon,
	MessageCircleMore,
	Power,
	Users,
} from "lucide-react";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const routes = [
	{
		href: "/",
		label: "Home",
		icon: HomeIcon,
	},
	{
		href: "/users",
		label: "Users",
		icon: Users,
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

export const MobileSidebar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const pathname = usePathname();
	const activeRoute =
		routes.find(
			(route) => route.href.length > 0 && pathname.includes(route.href)
		) || routes[0];

	return (
		<div className="block border-separate md:hidden bg-background">
			<nav className="container flex justify-between items-center px-8">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant={"ghost"} size={"icon"}>
							<MenuIcon />
						</Button>
					</SheetTrigger>
					<SheetContent
						side={"left"}
						className="w-[400px] sm:w-[540px] space-y-4">
						<Logo />
						<div className="flex flex-col gap-1">
							{routes.map((route) => (
								<Link
									href={route.href}
									key={route.label}
									className={buttonVariants({
										variant:
											activeRoute.href === route.href
												? "sidebarItemActive"
												: "sidebarItem",
									})}
									onClick={() => setIsOpen((prev) => !prev)}>
									<route.icon size={20} /> {route.label}
								</Link>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default DesktopSidebar;

"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from "../ui/breadcrumb";
import { MobileSidebar } from "./desktop-sidebar";
import { ChevronRight } from "lucide-react";

const BreadCrumbHeader = () => {
	const pathname = usePathname();
	const paths = pathname === "/" ? [""] : pathname.split("/");
	return (
		<div className="flex items-center flex-start">
			<MobileSidebar />
			<Breadcrumb>
				<BreadcrumbList>
					{paths.map((path, index) => (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="capitalize flex items-center justify-between"
									href={`/${path}`}>
									<span>{path == "" ? "Home" : path}</span>
									{paths.length == index + 1 ? null : (
										<ChevronRight className="w-4 h-4" />
									)}
								</BreadcrumbLink>
							</BreadcrumbItem>
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default BreadCrumbHeader;

import BreadCrumbHeader from "@/components/custom/breadcrumb-header";
import DesktopSidebar from "@/components/custom/desktop-sidebar";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen">
			<DesktopSidebar />
			<div className="flex flex-col flex-1 min-h-screen">
				<header className="flex justify-between items-center px-6 py-4 h-[50px] container">
					<BreadCrumbHeader />
				</header>
				<Separator />
				<div className="overflow-auto">
					<div className="flex-1 container p-4 text-accent-foreground">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;

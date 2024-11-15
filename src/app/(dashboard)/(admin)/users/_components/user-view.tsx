"use client";
import DataTable from "@/components/custom/datatable";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import { loadUserColumns } from "./user-columns";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/custom/button-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
	DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
	CreditCard,
	Settings,
	Keyboard,
	Users,
	UserPlus,
	Mail,
	MessageSquare,
	PlusCircle,
	Plus,
	EllipsisVertical,
	UserIcon,
} from "lucide-react";

const UserView = () => {
	//get columns from columns.tsx only once
	const columns: ColumnDef<User>[] = React.useMemo(
		() => loadUserColumns({}),
		[]
	);

	return (
		<div className="flex-1 flex flex-col h-full container">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="text-2xl font-bold">Users</h1>
					<p className="text-muted-foreground text-sm">manage your users</p>
				</div>
				<ButtonGroup orientation="horizontal">
					<Button>Import Users</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="rounded-tl-none rounded-bl-none outline-none focus-visible:ring-transparent ">
								<EllipsisVertical />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-30 mr-3">
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Users />
									<span>Import</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<UserPlus />
									<span>Add User</span>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</ButtonGroup>
			</div>
			<div className="h-full py-6">
				<DataTable columns={columns} data={[]} isFetching={true} />
			</div>
		</div>
	);
};

export default UserView;

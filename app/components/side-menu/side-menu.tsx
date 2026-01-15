import "./side-menu.css";
import { Label, ListBox } from "@heroui/react";
import { CalendarDaysIcon,  Check, Sun } from "lucide-react";

export default function SideMenu() {
	return (
		<div className="side-menu side-menu-color h-screen w-fit">
			<div><Check /></div>
			<ListBox
				aria-label="Users"
				className="w-[220px]"
				selectionMode="single"
			>
				<ListBox.Item id="1">
					<Label className="flex flex-row items-center gap-2">
						<Sun /> Today
					</Label>
				</ListBox.Item>
				<ListBox.Item id="2">
					<Label className="flex flex-row items-center gap-2">
						<CalendarDaysIcon /> Weekly View
					</Label>
				</ListBox.Item>
			</ListBox>
		</div>
	);
}

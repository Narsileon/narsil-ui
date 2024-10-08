import { ChevronRight } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarSubTriggerProps extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger> {
	inset?: boolean;
}

const MenubarSubTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
	MenubarSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
	<MenubarPrimitive.SubTrigger
		ref={ref}
		className={cn(
			"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
			"focus:bg-accent focus:text-accent-foreground",
			"data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
			inset && "pl-8",
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className='ml-auto h-4 w-4' />
	</MenubarPrimitive.SubTrigger>
));
export default MenubarSubTrigger;

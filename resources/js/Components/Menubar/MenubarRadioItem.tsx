import { Circle } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import * as React from "react";

export interface MenubarRadioItemProps extends React.ComponentProps<typeof MenubarPrimitive.RadioItem> {}

const MenubarRadioItem = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.RadioItem>, MenubarRadioItemProps>(
	({ className, children, ...props }, ref) => (
		<MenubarPrimitive.RadioItem
			ref={ref}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
				"focus:bg-accent focus:text-accent-foreground",
				"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className
			)}
			{...props}
		>
			<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
				<MenubarPrimitive.ItemIndicator>
					<Circle className='h-4 w-4 fill-current' />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.RadioItem>
	)
);

export default MenubarRadioItem;

import { Circle } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as React from "react";

export interface ContextMenuRadioItemProps extends React.ComponentProps<typeof ContextMenuPrimitive.RadioItem> {}

const ContextMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
	ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
	<ContextMenuPrimitive.RadioItem
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
			<ContextMenuPrimitive.ItemIndicator>
				<Circle className='h-2 w-2 fill-current' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.RadioItem>
));

export default ContextMenuRadioItem;

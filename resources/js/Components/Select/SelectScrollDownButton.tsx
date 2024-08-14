import { ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectScrollDownButtonProps extends React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> {}

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={cn("flex cursor-default items-center justify-center py-1", className)}
		{...props}
	>
		<ChevronDown className='h-4 w-4' />
	</SelectPrimitive.ScrollDownButton>
));

export default SelectScrollDownButton;

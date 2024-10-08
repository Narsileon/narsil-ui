import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectLabelProps extends React.ComponentProps<typeof SelectPrimitive.Label> {}

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, SelectLabelProps>(
	({ className, ...props }, ref) => (
		<SelectPrimitive.Label
			ref={ref}
			className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
			{...props}
		/>
	)
);

export default SelectLabel;

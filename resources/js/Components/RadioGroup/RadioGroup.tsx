import { cn } from "@narsil-ui/Components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

export interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
	({ className, ...props }, ref) => (
		<RadioGroupPrimitive.Root
			ref={ref}
			className={cn("grid gap-2", className)}
			{...props}
		/>
	)
);

export default RadioGroup;

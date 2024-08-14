import { cn } from "@narsil-ui/Components";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

export interface AccordionItemProps extends React.ComponentProps<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(
	({ className, ...props }, ref) => (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn("border-b", className)}
			{...props}
		/>
	)
);

export default AccordionItem;

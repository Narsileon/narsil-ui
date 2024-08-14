import { ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

export interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
	({ className, children, ...props }, ref) => (
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
					"[&[data-state=open]>svg]:rotate-180",
					className
				)}
				{...props}
			>
				{children}
				<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
);

export default AccordionTrigger;

import { ChevronDown } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Trigger
			ref={ref}
			className={cn(
				"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
				"placeholder:text-muted-foreground",
				"focus:border-primary focus:outline-none",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"[&>span]:line-clamp-1",
				className
			)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon asChild={true}>
				<ChevronDown className='h-4 w-4 opacity-50' />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	)
);

export default SelectTrigger;

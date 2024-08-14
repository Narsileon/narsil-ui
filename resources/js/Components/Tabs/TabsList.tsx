import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
	({ className, ...props }, ref) => (
		<TabsPrimitive.List
			ref={ref}
			className={cn(
				"inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
				className
			)}
			{...props}
		/>
	)
);

export default TabsList;

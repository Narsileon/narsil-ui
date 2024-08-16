import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
	({ className, ...props }, ref) => (
		<TabsPrimitive.Content
			ref={ref}
			className={cn(
				"mt-2 gap-y-4 ring-offset-background",
				"focus-visible:border-primary focus-visible:outline-none",
				className
			)}
			{...props}
		/>
	)
);

export default TabsContent;

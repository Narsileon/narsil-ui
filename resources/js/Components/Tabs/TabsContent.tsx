import { cn } from "@narsil-ui/Components";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
	({ className, ...props }, ref) => (
		<TabsPrimitive.Content
			ref={ref}
			className={cn(
				"flex w-full flex-col gap-y-4 rounded-md data-[state=active]:mt-2",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
				className
			)}
			{...props}
		/>
	)
);

export default TabsContent;

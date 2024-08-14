import { cn } from "@narsil-ui/Components";
import * as React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("animate-pulse rounded-md bg-primary/10", className)}
		{...props}
	/>
));

export default Skeleton;

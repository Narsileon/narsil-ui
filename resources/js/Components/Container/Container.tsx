import { cn } from "@narsil-ui/Components";
import React from "react";

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, className }, ref) => (
	<div
		ref={ref}
		className={cn("mx-auto h-fit w-full px-4 sm:w-11/12 md:w-10/12 lg:w-9/12", className)}
	>
		{children}
	</div>
));

export default Container;

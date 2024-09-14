import { cn } from "@narsil-ui/Components";
import * as React from "react";
import Separator from "@narsil-ui/Components/Separator/Separator";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
	<>
		<Separator className='my-4' />

		<div
			ref={ref}
			className={cn("flex flex-row-reverse flex-wrap items-center justify-between gap-4", className)}
			{...props}
		/>
	</>
));

export default CardFooter;

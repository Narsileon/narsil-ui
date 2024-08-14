import { cn } from "@narsil-ui/Components";
import * as React from "react";
import Separator from "@narsil-ui/Components/Separator/Separator";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
	<>
		<div
			ref={ref}
			className={cn("flex flex-col space-y-1.5", className)}
			{...props}
		/>

		<Separator className='my-4' />
	</>
));

export default CardHeader;

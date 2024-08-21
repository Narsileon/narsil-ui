import { cn } from "@narsil-ui/Components";
import { useCarouselContext } from "./Carousel";
import * as React from "react";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(({ className, ...props }, ref) => {
	const { orientation } = useCarouselContext();

	return (
		<div
			ref={ref}
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			aria-roledescription='slide'
			role='group'
			{...props}
		/>
	);
});

export default CarouselItem;

import { cn } from "@narsil-ui/Components";
import { useCarousel } from "./Carousel";
import * as React from "react";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel();

		return (
			<div
				ref={carouselRef}
				className='overflow-hidden'
			>
				<div
					ref={ref}
					className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
					{...props}
				/>
			</div>
		);
	}
);

export default CarouselContent;

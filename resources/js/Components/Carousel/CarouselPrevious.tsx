import { ArrowLeft } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { useCarousel } from "./Carousel";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";

export interface CarouselPreviousProps extends ButtonProps {}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { canScrollPrev, orientation, scrollPrev } = useCarousel();

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					"absolute h-8 w-8 rounded-full",
					orientation === "horizontal"
						? "-left-12 top-1/2 -translate-y-1/2"
						: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
					className
				)}
				disabled={!canScrollPrev}
				onClick={scrollPrev}
				{...props}
			>
				<ArrowLeft className='h-4 w-4' />
				<span className='sr-only'>Previous slide</span>
			</Button>
		);
	}
);

export default CarouselPrevious;

import { ArrowRight } from "lucide-react";
import { Button, cn } from "@narsil-ui/Components";
import { useCarousel } from "./Carousel";
import * as React from "react";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { canScrollNext, orientation, scrollNext } = useCarousel();

		return (
			<Button
				ref={ref}
				variant={variant}
				size={size}
				className={cn(
					"absolute h-8 w-8 rounded-full",
					orientation === "horizontal"
						? "-right-12 top-1/2 -translate-y-1/2"
						: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
					className
				)}
				disabled={!canScrollNext}
				onClick={scrollNext}
				{...props}
			>
				<ArrowRight className='h-4 w-4' />
				<span className='sr-only'>Next slide</span>
			</Button>
		);
	}
);

export default CarouselNext;

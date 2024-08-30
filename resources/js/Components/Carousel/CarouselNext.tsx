import { ArrowRight } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { useCarouselContext } from "./Carousel";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface CarouselNextProps extends ButtonProps {}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const { canScrollNext, orientation, scrollNext } = useCarouselContext();

		return (
			<TooltipWrapper tooltip={trans("Next slide")}>
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
					<span className='sr-only'>{trans("Next slide")}</span>
				</Button>
			</TooltipWrapper>
		);
	}
);

export default CarouselNext;

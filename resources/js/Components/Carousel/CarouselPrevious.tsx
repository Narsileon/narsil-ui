import { ChevronLeft } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { useCarouselContext } from "./Carousel";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface CarouselPreviousProps extends ButtonProps {}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
	({ className, variant = "ghost", size = "icon", ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const { canScrollPrev, orientation, scrollPrev } = useCarouselContext();

		const buttonLabel = trans("Previous slide");

		return (
			<TooltipWrapper tooltip={buttonLabel}>
				<Button
					ref={ref}
					className={cn(
						"absolute rounded-full",
						orientation === "horizontal"
							? "-left-12 top-1/2 -translate-y-1/2"
							: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
						className
					)}
					aria-label={buttonLabel}
					disabled={!canScrollPrev}
					size={size}
					variant={variant}
					onClick={scrollPrev}
					{...props}
				>
					<ChevronLeft className='h-6 w-6' />
				</Button>
			</TooltipWrapper>
		);
	}
);

export default CarouselPrevious;

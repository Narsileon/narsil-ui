import { ChevronRight } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { useCarouselContext } from "./Carousel";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface CarouselNextProps extends ButtonProps {}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
	({ className, variant = "ghost", size = "icon", ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const { canScrollNext, orientation, scrollNext } = useCarouselContext();

		const buttonLabel = trans("Next slide");

		return (
			<TooltipWrapper tooltip={buttonLabel}>
				<Button
					ref={ref}
					className={cn(
						"absolute rounded-full",
						orientation === "horizontal"
							? "-right-12 top-1/2 -translate-y-1/2"
							: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
						className
					)}
					aria-label={buttonLabel}
					disabled={!canScrollNext}
					size={size}
					variant={variant}
					onClick={scrollNext}
					{...props}
				>
					<ChevronRight className='h-6 w-6' />
				</Button>
			</TooltipWrapper>
		);
	}
);

export default CarouselNext;

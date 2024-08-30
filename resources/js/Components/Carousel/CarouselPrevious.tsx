import { ArrowLeft } from "lucide-react";
import { cn } from "@narsil-ui/Components";
import { useCarouselContext } from "./Carousel";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import Button, { ButtonProps } from "@narsil-ui/Components/Button/Button";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface CarouselPreviousProps extends ButtonProps {}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
	({ className, variant = "outline", size = "icon", ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const { canScrollPrev, orientation, scrollPrev } = useCarouselContext();

		return (
			<TooltipWrapper tooltip={trans("Previous slide")}>
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
					<span className='sr-only'>{trans("Previous slide")}</span>
				</Button>
			</TooltipWrapper>
		);
	}
);

export default CarouselPrevious;

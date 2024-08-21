import { cn } from "@narsil-ui/Components";
import { CreatePluginType, EmblaCarouselType, EmblaOptionsType, EmblaPluginsType } from "embla-carousel";
import * as React from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselContextProps = {
	api: UseEmblaCarouselType[1];
	canScrollPrev: boolean;
	canScrollNext: boolean;
	carouselRef: UseEmblaCarouselType[0];
	scrollPrev: () => void;
	scrollNext: () => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

interface CarouselProps {
	opts?: EmblaOptionsType;
	orientation?: "horizontal" | "vertical";
	plugins?: CreatePluginType<EmblaPluginsType, {}>[] | undefined;
	setApi?: (api: EmblaCarouselType) => void;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
	({ children, className, opts, orientation = "horizontal", plugins, setApi, ...props }, ref) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins
		);
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: EmblaCarouselType) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext]
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on("reInit", onSelect);
			api.on("select", onSelect);

			return () => {
				api?.off("select", onSelect);
			};
		}, [api, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					canScrollNext: canScrollNext,
					canScrollPrev: canScrollPrev,
					opts: opts,
					orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
					scrollNext: scrollNext,
					scrollPrev: scrollPrev,
				}}
			>
				<div
					ref={ref}
					className={cn("relative", className)}
					role='region'
					aria-roledescription='carousel'
					onKeyDownCapture={handleKeyDown}
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	}
);

export function useCarouselContext() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarouselContext must be used within a <Carousel />");
	}

	return context;
}

export default Carousel;

type CarouselApi = import("embla-carousel").EmblaCarouselType;

type CarouselContextProps = {
	api: import("embla-carousel-react").UseEmblaCarouselType[1];
	canScrollPrev: boolean;
	canScrollNext: boolean;
	carouselRef: import("embla-carousel-react").UseEmblaCarouselType[0];
	scrollPrev: () => void;
	scrollNext: () => void;
} & CarouselProps;

interface CarouselProps {
	opts?: import("embla-carousel").EmblaOptionsType;
	orientation?: "horizontal" | "vertical";
	plugins?: import("embla-carousel").CreatePluginType<import("embla-carousel").EmblaPluginsType, {}>[] | undefined;
	setApi?: (api: CarouselApi) => void;
}

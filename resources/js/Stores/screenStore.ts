import { create } from "zustand";

type State = {
	isDesktop: boolean;
	isMobile: boolean;
	isTablet: boolean;
	width: number;
};

const useScreenStore = create<State>((set) => {
	let initialWidth = window.innerWidth;

	const handleResize = () => {
		let newWidth = window.innerWidth;

		set({
			isDesktop: newWidth >= 1024,
			isMobile: newWidth < 640,
			isTablet: newWidth < 1024,
			width: newWidth,
		});
	};

	window.addEventListener("resize", handleResize);

	return {
		isDesktop: initialWidth >= 1024,
		isMobile: initialWidth < 640,
		isTablet: initialWidth < 1024,
		width: initialWidth,

		destroy: () => {
			window.removeEventListener("resize", handleResize);
		},
	};
});

export default useScreenStore;

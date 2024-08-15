import { create } from "zustand";

type State = {
	isDesktop: boolean;
	isMobile: boolean;
	width: number;
};

const useScreenStore = create<State>((set) => {
	let initialWidth = window.innerWidth;

	const handleResize = () => {
		let newWidth = window.innerWidth;

		set({
			isDesktop: newWidth >= 640,
			isMobile: newWidth < 640,
			width: newWidth,
		});
	};

	window.addEventListener("resize", handleResize);

	return {
		isDesktop: initialWidth >= 640,
		isMobile: initialWidth < 640,
		width: initialWidth,

		destroy: () => {
			window.removeEventListener("resize", handleResize);
		},
	};
});

export default useScreenStore;

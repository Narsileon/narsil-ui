import { useFullscreen } from "react-use";
import * as React from "react";
import ScrollArea, { ScrollAreaProps } from "@narsil-ui/Components/ScrollArea/ScrollArea";

type FullscreenState = {
	isFullscreen: boolean;
};

type FullscreenAction = {
	toggleFullscreen: () => void;
};

type FullscreenType = FullscreenState & FullscreenAction;

const FullscreenContext = React.createContext<FullscreenType>({} as FullscreenType);

export interface FullscreenProps extends ScrollAreaProps {}

const Fullscreen = React.forwardRef<HTMLDivElement, FullscreenProps>(({ className, ...props }, ref) => {
	const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);

	const defaultRef = React.useRef<HTMLDivElement>(null);

	const fullscreenRef = ref && typeof ref === "object" ? ref : defaultRef;

	useFullscreen(fullscreenRef, isFullscreen, {
		onClose: () => setIsFullscreen(false),
	});

	const toggleFullscreen = () => {
		setIsFullscreen((prev) => !prev);
	};

	return (
		<FullscreenContext.Provider
			value={{
				isFullscreen: isFullscreen,
				toggleFullscreen: toggleFullscreen,
			}}
		>
			<ScrollArea
				ref={fullscreenRef}
				className='group h-fit w-full'
				data-fullscreen={isFullscreen}
				orientation='vertical'
				{...props}
			/>
		</FullscreenContext.Provider>
	);
});

export function useFullscreenContext() {
	const context = React.useContext(FullscreenContext);

	if (!context) {
		throw new Error("useFullscreenContext must be used within a <Fullscreen />");
	}

	return context;
}

export default Fullscreen;

import { useFullscreen } from "react-use";
import * as React from "react";
import ScrollArea, { ScrollAreaProps } from "@narsil-ui/Components/ScrollArea/ScrollArea";

type FullScreenState = {
	isFullscreen: boolean;
};

type FullScreenAction = {
	toggleFullscreen: () => void;
};

type FullScreenType = FullScreenState & FullScreenAction;

const FullScreenContext = React.createContext<FullScreenType>({} as FullScreenType);

export interface FullScreenProps extends ScrollAreaProps {}

const FullScreen = React.forwardRef<HTMLDivElement, FullScreenProps>(({ className, children, ...props }, ref) => {
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
		<FullScreenContext.Provider
			value={{
				isFullscreen: isFullscreen,
				toggleFullscreen: toggleFullscreen,
			}}
		>
			<ScrollArea
				ref={fullscreenRef}
				className='h-fit w-full'
				orientation='vertical'
				{...props}
			/>
		</FullScreenContext.Provider>
	);
});

export function useFullScreenContext() {
	const context = React.useContext(FullScreenContext);

	if (!context) {
		throw new Error("useFullScreenContext must be used within a <FullScreen />");
	}

	return context;
}

export default FullScreen;

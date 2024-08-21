import { cn, useFullscreenable } from "@narsil-ui/Components/utils";
import * as React from "react";
import ScrollArea from "@narsil-ui/Components/ScrollArea/ScrollArea";

type SectionState = {
	isFullscreen: boolean;
};

type SectionAction = {
	toggleFullscreen: () => void;
};

type SectionType = SectionState & SectionAction;

const SectionContext = React.createContext<SectionType>({} as SectionType);

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ className, children, ...props }, ref) => {
	const fullscreenRef = React.useRef<HTMLDivElement>(null);

	const { isFullscreen, toggleFullscreen } = useFullscreenable(fullscreenRef);

	return (
		<SectionContext.Provider
			value={{
				isFullscreen: isFullscreen,
				toggleFullscreen: toggleFullscreen,
			}}
		>
			<ScrollArea
				ref={fullscreenRef}
				className='h-fit w-full'
				orientation='vertical'
			>
				<section
					ref={ref}
					className={cn("w-full grow bg-background p-4 text-foreground", className, {
						"p-4": isFullscreen,
					})}
					data-fullscreen={isFullscreen}
					{...props}
				>
					{children}
				</section>
			</ScrollArea>
		</SectionContext.Provider>
	);
});

export function useSectionContext() {
	const context = React.useContext(SectionContext);

	if (!context) {
		throw new Error("useSectionContext must be used within a <Section />");
	}

	return context;
}

export default Section;

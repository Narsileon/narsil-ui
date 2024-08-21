import { cn, useFullscreenable } from "@narsil-ui/Components/utils";
import * as React from "react";

type SectionState = {
	isFullscreen: boolean;
};

type SectionAction = {
	toggleFullscreen: () => void;
};

type SectionType = SectionState & SectionAction;

const SectionContext = React.createContext<SectionType>({} as SectionType);

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ className, ...props }, ref) => {
	const defaultRef = React.useRef<HTMLDivElement>(null);

	const sectionRef = ref && typeof ref === "object" ? ref : defaultRef;

	const { isFullscreen, toggleFullscreen } = useFullscreenable(sectionRef);

	return (
		<SectionContext.Provider
			value={{
				isFullscreen: isFullscreen,
				toggleFullscreen: toggleFullscreen,
			}}
		>
			<section
				ref={sectionRef}
				className={cn("bg-background p-4 text-foreground", className)}
				{...props}
			/>
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

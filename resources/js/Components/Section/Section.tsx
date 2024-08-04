import { cn, useFullscreenable } from "@narsil-ui/Components/utils";
import * as React from "react";

const SectionContext = React.createContext<SectionType>({} as SectionType);

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
			<div
				ref={sectionRef}
				className={cn("bg-background p-4 text-foreground", className)}
				{...props}
			/>
		</SectionContext.Provider>
	);
});

export function useSection() {
	const context = React.useContext(SectionContext);

	if (!context) {
		throw new Error("useToggleGroup must be used within a <Section />");
	}

	return context;
}

export default Section;

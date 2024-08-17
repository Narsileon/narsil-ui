import { Maximize, Minimize } from "lucide-react";
import { useSection } from "./Section";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import Toggle, { ToggleProps } from "@narsil-ui/Components/Toggle/Toggle";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface SectionFullscreenToggleProps extends Partial<ToggleProps> {}

const SectionFullscreenToggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	SectionFullscreenToggleProps
>(({ children, ...props }, ref) => {
	const { trans } = useTranslationsStore();

	const context = useSection();

	return (
		<TooltipWrapper tooltip={trans(context?.isFullscreen ? "Exit full screen mode" : "Enter full screen mode")}>
			<Toggle
				ref={ref}
				onClick={() => context?.toggleFullscreen()}
				{...props}
			>
				{context?.isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
			</Toggle>
		</TooltipWrapper>
	);
});

export default SectionFullscreenToggle;

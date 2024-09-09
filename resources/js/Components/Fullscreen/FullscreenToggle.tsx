import { Maximize, Minimize } from "lucide-react";
import { useFullscreenContext } from "./Fullscreen";
import { useTranslationsStore } from "@narsil-localization/Stores/translationStore";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import Button from "@narsil-ui/Components/Button/Button";
import Toggle, { ToggleProps } from "@narsil-ui/Components/Toggle/Toggle";
import TooltipWrapper from "@narsil-ui/Components/Tooltip/TooltipWrapper";

export interface FullscreenToggleProps extends Partial<ToggleProps> {}

const FullscreenToggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, FullscreenToggleProps>(
	({ children, ...props }, ref) => {
		const { trans } = useTranslationsStore();

		const { isFullscreen, toggleFullscreen } = useFullscreenContext();

		const buttonLabel = trans(isFullscreen ? "Exit full screen mode" : "Enter full screen mode");

		return (
			<TooltipWrapper tooltip={buttonLabel}>
				<Toggle
					ref={ref}
					onClick={() => toggleFullscreen()}
					asChild
					{...props}
				>
					<Button
						aria-label={buttonLabel}
						size={"icon"}
						variant={"ghost"}
					>
						{isFullscreen ? <Minimize className='h-6 w-6' /> : <Maximize className='h-6 w-6' />}
					</Button>
				</Toggle>
			</TooltipWrapper>
		);
	}
);

export default FullscreenToggle;

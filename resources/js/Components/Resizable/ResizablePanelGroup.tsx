import { cn } from "@narsil-ui/Components";
import * as ResizablePrimitive from "react-resizable-panels";

const ResizablePanelGroup = ({ className, ...props }: ResizablePanelGroupProps) => (
	<ResizablePrimitive.PanelGroup
		className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
		{...props}
	/>
);

export default ResizablePanelGroup;

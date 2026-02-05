import { Tooltip } from "@base-ui/react/tooltip";
import { cn } from "@narsil-ui/lib/utils";

function TooltipPositioner({
  className,
  align = "center",
  alignOffset = 0,
  side = "top",
  sideOffset = 4,
  ...props
}: Tooltip.Positioner.Props) {
  return (
    <Tooltip.Positioner
      data-slot="tooltip-positioner"
      className={cn("isolate z-50", className)}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

export default TooltipPositioner;

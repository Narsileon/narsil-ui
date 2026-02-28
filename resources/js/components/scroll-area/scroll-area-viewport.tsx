import { ScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "@narsil-ui/lib/utils";

function ScrollAreaViewport({ className, ...props }: ScrollArea.Viewport.Props) {
  return (
    <ScrollArea.Viewport
      data-slot="scroll-area-viewport"
      className={cn(
        "size-full rounded-[inherit] ring-1 ring-transparent transition-[color,box-shadow] outline-none",
        "focus-visible:ring-primary",
        className,
      )}
      {...props}
    />
  );
}

export default ScrollAreaViewport;

import { Slider } from "@base-ui/react/slider";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type SliderThumbProps = ComponentProps<typeof Slider.Thumb>;

function SliderThumb({ className, ...props }: SliderThumbProps) {
  return (
    <Slider.Thumb
      data-slot="slider-thumb"
      className={cn(
        "relative block size-4 shrink-0 cursor-pointer rounded-full border bg-white ring-1 ring-transparent transition-[color,box-shadow] select-none",
        "active:ring-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:ring-primary",
        "hover:ring-primary",
        className,
      )}
      {...props}
    />
  );
}

export default SliderThumb;

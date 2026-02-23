import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function StatusItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn("size-3 shrink-0 rounded-full delay-100 duration-300", className)}
      {...props}
    />
  );
}

export default StatusItem;

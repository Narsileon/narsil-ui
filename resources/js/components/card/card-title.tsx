import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("h-9 content-center leading-none font-semibold", className)}
      {...props}
    />
  );
}

export default CardTitle;

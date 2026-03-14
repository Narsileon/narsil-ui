import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-4 pb-2 [.border-t]:pt-2", className)}
      {...props}
    />
  );
}

export default CardFooter;

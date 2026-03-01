import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function PaginationItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li data-slot="pagination-item" className={cn("focus-within:z-10", className)} {...props} />
  );
}

export default PaginationItem;

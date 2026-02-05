import { Icon } from "@narsil-ui/components/icon";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type PaginationEllipsisProps = ComponentProps<"span"> & {
  label?: string;
};

function PaginationEllipsis({ className, label = "More", ...props }: PaginationEllipsisProps) {
  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      aria-hidden
      {...props}
    >
      <Icon className="size-4" name="more-horizontal" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default PaginationEllipsis;

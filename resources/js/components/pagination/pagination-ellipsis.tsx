import { Icon } from "@narsil-ui/components/icon";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) {
  const { trans } = useTranslator();

  const label = trans("pagination.more", { fallback: "More" });

  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      aria-hidden={true}
      {...props}
    >
      <Icon className="size-4" name="more-horizontal" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default PaginationEllipsis;

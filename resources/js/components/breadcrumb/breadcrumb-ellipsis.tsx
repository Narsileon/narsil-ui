import { Icon } from "@narsil-ui/components/icon";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function BreadcrumbEllipsis({ children, className, ...props }: ComponentProps<"span">) {
  const { trans } = useTranslator();

  const label = trans("pagination.more", { fallback: "More" });

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      className={cn("flex size-5 items-center justify-center [&>svg]:size-4", className)}
      aria-hidden="true"
      {...props}
    >
      {children ?? <Icon name="more-horizontal" />}
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default BreadcrumbEllipsis;

import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
}
export default TableHeader;

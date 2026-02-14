import { type PaginationMeta } from "@narsil-ui/components/pagination";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { ComponentProps } from "react";

type DataTableResultProps = ComponentProps<"span"> & {
  meta: PaginationMeta;
};

function DataTableResults({ className, meta, ...props }: DataTableResultProps) {
  const { trans } = useTranslator();

  return (
    <span data-slot="data-table-results" className={cn("truncate", className)} {...props}>
      {meta.total > 0
        ? trans("data-table.results", {
            fallback: "Page :current_page of :last_page",
            replacements: {
              current_page: meta.current_page,
              last_page: meta.last_page,
            },
          })
        : trans("data-table.results_empty", { fallback: "No results" })}
    </span>
  );
}

export default DataTableResults;

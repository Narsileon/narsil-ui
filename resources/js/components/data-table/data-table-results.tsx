import { type PaginationMeta } from "@narsil-ui/blocks/pagination";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { ComponentProps } from "react";

type DataTableResultProps = ComponentProps<"span"> & {
  meta: PaginationMeta;
};

function DataTableResults({ className, meta, ...props }: DataTableResultProps) {
  const { trans } = useTranslator();

  const emptyLabel = trans("data-table.empty");
  const resultsLabel = trans("data-table.results", {
    replacements: {
      current_page: meta.current_page,
      last_page: meta.last_page,
    },
  });

  return (
    <span data-slot="data-table-results" className={cn("truncate", className)} {...props}>
      {meta.total > 0 ? resultsLabel : emptyLabel}
    </span>
  );
}

export default DataTableResults;

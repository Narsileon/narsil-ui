import { useDataTable } from "@narsil-ui/components/data-table";
import { type PaginationMeta } from "@narsil-ui/components/pagination";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type DataTableSelectionProps = ComponentProps<"span"> & {
  meta: PaginationMeta;
};

function DataTableSelection({ className, meta, ...props }: DataTableSelectionProps) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const selected = table.getSelectedRowModel().rows.length;

  return (
    <span data-slot="data-table-selection" className={cn("truncate", className)} {...props}>
      {selected > 0
        ? trans("data-table.selection", {
            fallback: ":selected of :total rows selected",
            replacements: {
              selected: selected,
              total: meta.total,
            },
          })
        : trans("data-table.selection_empty", { fallback: "No row selected" })}
    </span>
  );
}

export default DataTableSelection;

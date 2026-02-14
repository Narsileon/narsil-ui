import { DataTableFilterItem, useDataTable } from "@narsil-ui/components/data-table";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function DataTableFilterList({ className, ...props }: ComponentProps<"ul">) {
  const table = useDataTable();

  const columnFilters = table.getState().columnFilters;

  return columnFilters.length > 0 ? (
    <ul className={cn("flex items-center gap-2", className)} {...props}>
      {columnFilters.map((columnFilter, index) => {
        return <DataTableFilterItem filter={columnFilter} key={index} />;
      })}
    </ul>
  ) : null;
}

export default DataTableFilterList;

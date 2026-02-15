import { Badge } from "@narsil-ui/components/badge";
import { Button } from "@narsil-ui/components/button";
import { useDataTable } from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import { cn } from "@narsil-ui/lib/utils";
import { useMemo, type ComponentProps } from "react";

function DataTableFilters({ className, ...props }: ComponentProps<"ul">) {
  const table = useDataTable();

  const filteredColumns = useMemo(
    () => table.getAllColumns().filter((column) => column.getIsFiltered()),
    [table],
  );

  return filteredColumns.length > 0 ? (
    <ul className={cn("flex items-center gap-2", className)} {...props}>
      {filteredColumns.map((column, index) => {
        return (
          <li key={index}>
            <Badge className="cursor-pointer pr-0">
              {column.columnDef.header as string}
              <Button
                variant="ghost-secondary"
                size="icon-xs"
                onClick={() => {
                  column.setFilterValue(undefined);
                }}
              >
                <Icon className="text-primary-foreground" name="x" />
              </Button>
            </Badge>
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default DataTableFilters;

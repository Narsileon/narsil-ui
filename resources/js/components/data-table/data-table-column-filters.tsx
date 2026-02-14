import { useDataTable } from "@narsil-ui/components/data-table";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuPopup,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "@narsil-ui/components/dropdown-menu";
import { isString } from "lodash-es";
import { type ComponentProps } from "react";

type DataTableColumnFiltersProps = ComponentProps<typeof DropdownMenuTrigger>;

function DataTableColumnFilters({ children, ...props }: DataTableColumnFiltersProps) {
  const table = useDataTable();

  const filteredColumns = table.getState().columnFilters.map((filter) => filter.id);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger {...props}>{children}</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuPositioner>
          <DropdownMenuPopup>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                if (!isString(column.columnDef.header)) {
                  return null;
                }

                return (
                  <DropdownMenuCheckboxItem
                    checked={filteredColumns.includes(column.id)}
                    onCheckedChange={(checked) => {
                      table.setColumnFilters((old) => {
                        if (checked) {
                          return [...old, { id: column.id, value: "" }];
                        } else {
                          return old.filter((filter) => filter.id !== column.id);
                        }
                      });
                    }}
                    key={column.id}
                  >
                    {column.columnDef.header}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuPopup>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}

export default DataTableColumnFilters;

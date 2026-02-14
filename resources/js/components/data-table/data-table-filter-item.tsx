import { Select } from "@narsil-cms/blocks/fields/select";
import { getField } from "@narsil-cms/registries/fields";
import { Badge } from "@narsil-ui/components/badge";
import { Button } from "@narsil-ui/components/button";
import { useDataTable } from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { ColumnFilter } from "@tanstack/react-table";
import { isEmpty } from "lodash-es";
import { useEffect, useState, type ComponentProps } from "react";

type DataTableFilterItemProps = ComponentProps<typeof PopoverTrigger> & {
  filter: ColumnFilter;
};

function DataTableFilterItem({ filter, ...props }: DataTableFilterItemProps) {
  const table = useDataTable();

  const [open, onOpenChange] = useState(false);

  const column = table.getColumn(filter.id);

  if (!column) {
    return null;
  }

  useEffect(() => {
    if (isEmpty(filter.operator)) {
      table.updateFilter(filter.column, {
        operator: meta.operators[0].value as string,
      });

      onOpenChange(true);
    }
  }, [filter.operator]);

  function updateFilter(
    table: ReturnType<typeof useDataTable>,
    columnId: string,
    patch: Partial<{ operator: string; value: unknown }>,
  ) {
    table.setColumnFilters((old) =>
      old.map((filter) =>
        filter.id === columnId ? { ...filter, value: { ...filter.value, ...patch } } : filter,
      ),
    );
  }

  return (
    <PopoverRoot open={open} onOpenChange={onOpenChange} modal={true}>
      <PopoverTrigger
        {...props}
        render={
          <li>
            <Badge className="cursor-pointer pr-0">
              {column.columnDef.header as string}
              <Button
                variant="ghost-secondary"
                size="icon-xs"
                onClick={() =>
                  table.setColumnFilters((old) => {
                    return old.filter((filter) => filter.id !== column.id);
                  })
                }
              >
                <Icon className="text-primary-foreground" name="x" />
              </Button>
            </Badge>
          </li>
        }
      ></PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="flex flex-col gap-4">
            <Select
              iconProps={{
                icon: "filter",
              }}
              triggerProps={{
                className: "w-full text-left",
              }}
              options={meta.operators}
              value={filter.operator}
              onValueChange={(value) => {
                // dataTableStore.updateFilter(filter.column, { operator: value });
              }}
            />
            {getField(meta.field.type, {
              id: filter.column,
              field: meta.field,
              value: filter.value,
              setValue: (value) => {
                return;
                //dataTableStore.updateFilter(filter.column, { value: value });
              },
            })}
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
}

export default DataTableFilterItem;

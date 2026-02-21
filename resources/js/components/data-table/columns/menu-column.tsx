import { type TableData, DataTableRowMenu } from "@narsil-ui/components/data-table";
import type { RoutesData } from "@narsil-ui/types";
import { type ColumnDef } from "@tanstack/react-table";

function getMenuColumn(routes: RoutesData): ColumnDef<TableData> {
  return {
    id: "_menu",
    header: ({ table }) => {
      const checked = table.getIsAllPageRowsSelected();
      const indeterminate = table.getIsSomePageRowsSelected();

      return checked || indeterminate ? (
        <DataTableRowMenu routes={routes} table={table} />
      ) : (
        <span className="sr-only">Menu</span>
      );
    },
    cell: ({ row }) => {
      return <DataTableRowMenu id={row.original.id ?? row.original.uuid} routes={routes} />;
    },
    enableHiding: false,
    enableSorting: false,
    meta: {
      className: "min-w-12 w-12 max-w-12 sticky right-0 mask-l-from-85% mask-no-repeat",
    },
  };
}

export default getMenuColumn;

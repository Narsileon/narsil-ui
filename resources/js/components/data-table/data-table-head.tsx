import { DataTableHeadSort } from "@narsil-ui/components/data-table";
import { TableHead } from "@narsil-ui/components/table";
import { cn } from "@narsil-ui/lib/utils";
import { flexRender, Header } from "@tanstack/react-table";
import { upperFirst } from "lodash-es";
import { type ComponentProps } from "react";

type DataTableHeadProps = ComponentProps<typeof TableHead> & {
  header: Header<any, unknown>;
};

function DataTableHead({ className, header, ...props }: DataTableHeadProps) {
  return (
    <TableHead className={cn("bg-inherit", className)} colSpan={header.colSpan} {...props}>
      {typeof header.column.columnDef.header === "string" ? (
        <div className="flex items-center justify-start gap-1">
          {upperFirst(header.column.columnDef.header)}

          {header.column.getCanSort() ? <DataTableHeadSort header={header} /> : null}
        </div>
      ) : (
        flexRender(header.column.columnDef.header, header.getContext())
      )}
    </TableHead>
  );
}

export default DataTableHead;

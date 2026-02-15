import { router } from "@inertiajs/react";
import { DataTableHeadSort, useDataTable } from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  TableWrapper,
} from "@narsil-ui/components/table";
import { cn } from "@narsil-ui/lib/utils";
import type { DataTableCollection } from "@narsil-ui/types";
import { flexRender } from "@tanstack/react-table";
import { upperFirst } from "lodash-es";
import { route } from "ziggy-js";

type DataTableProps = {
  collection: DataTableCollection;
};

function DataTable({ collection }: DataTableProps) {
  const table = useDataTable();

  function handleCreate() {
    if (collection.meta.routes.create) {
      router.get(
        route(collection.meta.routes.create, {
          ...collection.meta.routes.parameters,
        }),
      );
    }
  }

  function handleEdit(identifier: number | string) {
    if (collection.meta.routes.edit) {
      router.get(
        route(collection.meta.routes.edit, {
          ...collection.meta.routes.parameters,
          id: identifier,
          uuid: identifier,
        }),
      );
    }
  }

  return (
    <TableWrapper>
      <TableRoot className="min-w-max" aria-colcount={table.getAllColumns().length}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow className="sticky top-0 z-10 bg-accent" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if (header.isPlaceholder) {
                    return null;
                  }

                  return (
                    <TableHead
                      className={cn("bg-inherit", header.column.columnDef.meta?.className)}
                      colSpan={header.colSpan}
                      key={header.id}
                    >
                      {typeof header.column.columnDef.header === "string" ? (
                        <div className="flex items-center justify-start gap-1">
                          {upperFirst(header.column.columnDef.header)}
                          {header.column.getCanSort() ? (
                            <DataTableHeadSort header={header} />
                          ) : null}
                        </div>
                      ) : (
                        flexRender(header.column.columnDef.header, header.getContext())
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => {
              const selected = row.getIsSelected();

              return (
                <TableRow
                  data-selected={selected}
                  className="cursor-pointer data-[selected=true]:bg-accent"
                  onClick={() => handleEdit(row.original.id)}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => {
                    let content = null;

                    if (cell.column.columnDef.meta?.type === "checkbox") {
                      content = cell.getValue() ? (
                        <Icon className="text-constructive" name="check" />
                      ) : (
                        <Icon className="text-destructive" name="x" />
                      );
                    } else {
                      content = flexRender(cell.column.columnDef.cell, cell.getContext() ?? "");
                    }

                    return (
                      <TableCell className={cell.column.columnDef.meta?.className} key={cell.id}>
                        {content}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow className="cursor-pointer" onClick={() => handleCreate()}>
              <TableCell colSpan={table.getVisibleFlatColumns().length} className="h-9" />
            </TableRow>
          )}
        </TableBody>
      </TableRoot>
    </TableWrapper>
  );
}

export default DataTable;

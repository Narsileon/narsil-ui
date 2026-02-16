import { router } from "@inertiajs/react";
import {
  DataTableFilters,
  DataTableHeadSort,
  DataTableInput,
  DataTablePageSize,
  DataTableResults,
  DataTableSelection,
  DataTableSettings,
  useDataTable,
} from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import { Pagination } from "@narsil-ui/components/pagination";
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
import { ComponentProps } from "react";
import { route } from "ziggy-js";

type DataTableProps = ComponentProps<"div"> & {
  collection: DataTableCollection;
};

function DataTable({ className, collection, ...props }: DataTableProps) {
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
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <div className="flex items-center justify-end gap-2">
        <DataTableInput />
        <DataTableSettings />
      </div>
      <DataTableFilters />
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
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <DataTableSelection meta={collection.meta} />
        <div className="flex w-full items-center justify-between gap-4 sm:w-fit sm:justify-end">
          <DataTablePageSize className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:items-center" />
          <div className="flex flex-col items-end gap-x-4 gap-y-2 sm:flex-row sm:items-center">
            <DataTableResults meta={collection.meta} />
            <Pagination links={collection.links} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;

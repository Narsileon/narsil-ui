import { router } from "@inertiajs/react";
import { TanStackTableData } from "@narsil-ui/types";
import {
  getCoreRowModel,
  TableState,
  Updater,
  useReactTable,
  type ColumnDef,
  type TableOptions,
} from "@tanstack/react-table";
import { useRef, useState, type ReactNode } from "react";
import { route } from "ziggy-js";
import { type Data } from ".";
import { DataTableContext } from "./data-table-context";

type DataTableProviderProps = Partial<Omit<TableOptions<Data>, "columns" | "initialState">> & {
  children: ReactNode;
  columns: ColumnDef<Data>[];
  data: Data[];
  initialState: TanStackTableData;
};

function DataTableProvider({
  children,
  columnResizeMode = "onEnd",
  columns,
  data,
  enableColumnFilters = true,
  enableFilters = true,
  enableGlobalFilter = true,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = true,
  enableRowSelection = true,
  enableSorting = true,
  manualFiltering = true,
  manualPagination = true,
  manualSorting = true,
  initialState,
  state,
  ...props
}: DataTableProviderProps) {
  const ref = useRef<TanStackTableData>(null);

  const [tableState, setTableState] = useState<Partial<TableState>>({
    columnFilters: initialState.column_filters,
    columnOrder: initialState.column_order,
    columnVisibility: initialState.column_visibility,
    globalFilter: initialState.global_filter,
    pagination: {
      pageIndex: 0,
      pageSize: initialState.page_size,
    },
    rowSelection: initialState.row_selection,
    sorting: initialState.sorting,
    ...state,
  });

  function handleStateChange(updater: Updater<TableState>) {
    setTableState((old) => {
      const next = typeof updater === "function" ? updater(old as TableState) : updater;

      const tanStackTableData = {
        column_filters: next.columnFilters,
        column_order: next.columnOrder,
        column_visibility: next.columnVisibility,
        global_filter: next.globalFilter,
        page_index: next.pagination?.pageIndex,
        page_size: next.pagination?.pageSize,
        row_selection: next.rowSelection,
        sorting: next.sorting,
        table_name: initialState.table_name,
      };

      if (JSON.stringify(tanStackTableData) !== JSON.stringify(ref.current)) {
        ref.current = tanStackTableData;

        router.post(route("narsil.data-tables.save"), tanStackTableData, {
          preserveState: true,
          preserveScroll: true,
          replace: true,
        });
      }

      return next;
    });
  }

  const dataTable = useReactTable<Data>({
    ...props,
    columnResizeMode: columnResizeMode,
    columns: columns,
    data: data,
    enableColumnFilters: enableColumnFilters,
    enableFilters: enableFilters,
    enableGlobalFilter: enableGlobalFilter,
    enableHiding: enableHiding,
    enableMultiRowSelection: enableMultiRowSelection,
    enableMultiSort: enableMultiSort,
    enableRowSelection: enableRowSelection,
    enableSorting: enableSorting,
    manualFiltering: manualFiltering,
    manualPagination: manualPagination,
    manualSorting: manualSorting,
    state: tableState,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id?.toString() ?? row.uuid,
    onStateChange: handleStateChange,
  });

  return (
    <DataTableContext.Provider value={{ table_name: initialState.table_name, ...dataTable }}>
      {children}
    </DataTableContext.Provider>
  );
}

export default DataTableProvider;

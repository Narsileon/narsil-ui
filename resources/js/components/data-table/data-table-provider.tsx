import { router } from "@inertiajs/react";
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
import { type DataTableData, type DataTableState } from ".";
import { DataTableContext } from "./data-table-context";

type DataTableProviderProps = Partial<
  Omit<TableOptions<DataTableData>, "columns" | "initialState">
> & {
  children: ReactNode;
  columns: ColumnDef<DataTableData>[];
  data: DataTableData[];
  initialState: DataTableState;
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
  const ref = useRef<DataTableState>(null);

  const [tableState, setTableState] = useState<Partial<TableState>>({
    columnFilters: initialState.column_filters,
    columnOrder: getColumnOrder(),
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

  function getColumnOrder() {
    const columnIds = columns
      .map((column) => {
        return column.id!;
      })
      .filter(Boolean);

    const validColumns = initialState.column_order.filter((id) => {
      return columnIds.includes(id);
    });

    const missingColumns = columnIds.filter((id) => {
      return !validColumns.includes(id);
    });

    return [...validColumns, ...missingColumns];
  }

  function handleStateChange(updater: Updater<TableState>) {
    setTableState((old) => {
      const next = typeof updater === "function" ? updater(old as TableState) : updater;

      const state = {
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

      if (JSON.stringify(state) !== JSON.stringify(ref.current)) {
        ref.current = state;

        router.post(route("narsil.data-tables.save"), state as any, {
          preserveState: true,
          preserveScroll: true,
          replace: true,
        });
      }

      return next;
    });
  }

  const dataTable = useReactTable<DataTableData>({
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

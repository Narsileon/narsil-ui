import { type PaginationLinks, PaginationMeta } from "@narsil-ui/components/pagination";
import type { FormData, RoutesData } from "@narsil-ui/types";
import { type ColumnDef } from "@tanstack/react-table";
import getMenuColumn from "./columns/menu-column";
import getSelectColumn from "./columns/select-column";
import DataTable from "./data-table";
import DataTableColumns from "./data-table-columns";
import useDataTable from "./data-table-context";
import DataTableFilterForm from "./data-table-filter-form";
import DataTableFilters from "./data-table-filters";
import DataTableHeadSort from "./data-table-head-sort";
import DataTableInput from "./data-table-input";
import DataTablePageSize from "./data-table-page-size";
import DataTablePresets from "./data-table-presets";
import DataTableProvider from "./data-table-provider";
import DataTableResults from "./data-table-results";
import DataTableRowMenu from "./data-table-row-menu";
import DataTableSelection from "./data-table-selection";

type DataTableData = {
  id: number;
  [key: string]: unknown;
};

type DataTableCollection<T = DataTableData> = {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta & {
    columns: ColumnDef<T>[];
    form: FormData;
    presets: Presets;
    routes: RoutesData;
    state: DataTableState;
    [key: string]: unknown;
  };
};

type Presets = {
  data: {
    name: string;
    uuid: string;
  }[];
  form: string;
};

type DataTableState = {
  column_filters: { id: string; value: unknown }[];
  column_order: string[];
  column_visibility: Record<string, boolean>;
  global_filter: string;
  page_size: number;
  row_selection: Record<string, boolean>;
  sorting: { id: string; desc: boolean }[];
  uuid: string;
};

export {
  DataTable,
  DataTableColumns,
  DataTableFilterForm,
  DataTableFilters,
  DataTableHeadSort,
  DataTableInput,
  DataTablePageSize,
  DataTablePresets,
  DataTableProvider,
  DataTableResults,
  DataTableRowMenu,
  DataTableSelection,
  getMenuColumn,
  getSelectColumn,
  useDataTable,
};

export type { DataTableCollection, DataTableData, DataTableState, Presets };

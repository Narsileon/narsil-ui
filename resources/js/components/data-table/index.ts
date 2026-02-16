import DataTable from "./data-table";
import useDataTable from "./data-table-context";
import DataTableFilterForm from "./data-table-filter-form";
import DataTableFilters from "./data-table-filters";
import DataTableHeadSort from "./data-table-head-sort";
import DataTableInput from "./data-table-input";
import DataTablePageSize from "./data-table-page-size";
import DataTableProvider from "./data-table-provider";
import DataTableResults from "./data-table-results";
import DataTableSelection from "./data-table-selection";
import DataTableSettings from "./data-table-settings";

type Data = {
  id: number;
  [key: string]: unknown;
};

export {
  DataTable,
  DataTableFilterForm,
  DataTableFilters,
  DataTableHeadSort,
  DataTableInput,
  DataTablePageSize,
  DataTableProvider,
  DataTableResults,
  DataTableSelection,
  DataTableSettings,
  useDataTable,
};

export type { Data };

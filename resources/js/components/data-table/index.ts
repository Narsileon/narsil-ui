import useDataTable from "./data-table-context";
import DataTableFilterForm from "./data-table-filter-form";
import DataTableFilters from "./data-table-filters";
import DataTableFooter from "./data-table-footer";
import DataTableHead from "./data-table-head";
import DataTableHeadSort from "./data-table-head-sort";
import DataTableInput from "./data-table-input";
import DataTablePageSize from "./data-table-page-size";
import DataTableProvider from "./data-table-provider";
import DataTableResults from "./data-table-results";
import DataTableRow from "./data-table-row";
import DataTableSelection from "./data-table-selection";
import DataTableSettings from "./data-table-settings";

type Data = {
  id: number;
  [key: string]: unknown;
};

export {
  DataTableFilterForm,
  DataTableFilters,
  DataTableFooter,
  DataTableHead,
  DataTableHeadSort,
  DataTableInput,
  DataTablePageSize,
  DataTableProvider,
  DataTableResults,
  DataTableRow,
  DataTableSelection,
  DataTableSettings,
  useDataTable,
};

export type { Data };

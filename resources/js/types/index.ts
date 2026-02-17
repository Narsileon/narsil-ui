import { Data } from "@narsil-ui/components/data-table";
import { PaginationLinks, PaginationMeta } from "@narsil-ui/components/pagination";
import { type IconName } from "@narsil-ui/registries/icons";
import { type ColumnDef } from "@tanstack/react-table";

export type DataTableCollection<T = Data> = {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta & {
    columns: ColumnDef<T>[];
    routes: RoutesData;
    tableData: TableData;
    [key: string]: unknown;
  };
};

export type FieldsetData = {
  id?: string | null;
  label?: string | null;
  description?: string | null;
  elements: Array<FieldsetData | InputData>;
};

export type FormStepData = {
  id?: string | null;
  label?: string | null;
  description?: string | null;
  elements: Array<FieldsetData | InputData>;
};

export type InputData = {
  id: string;
  label?: string | null;
  description?: string | null;
  append?: string | null;
  icon?: string | null;
  translatable: boolean;
  width: number;
  type: string;
  options?: OptionData[] | null;
  props: {
    accept?: string | null;
    autoComplete?: string | null;
    className?: string | null;
    id: string;
    placeholder?: string | null;
    readonly?: boolean;
    required?: boolean;
    type: string;
    [key: string]: any;
  } | null;
};

export type OptionData = {
  [key: string]: unknown;
  icon?: IconName;
  label: string | Record<string, string>;
  value: unknown;
};

export type RoutesData = Record<string, string> & {
  parameters?: Record<string, unknown>;
};

export type TableData = {
  column_filters: { id: string; value: unknown }[];
  column_order: string[];
  column_visibility: Record<string, boolean>;
  global_filter: string;
  page_size: number;
  row_selection: Record<string, boolean>;
  sorting: { id: string; desc: boolean }[];
  table_name: string;
};

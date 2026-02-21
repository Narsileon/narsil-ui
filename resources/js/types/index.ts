import { type TableData } from "@narsil-ui/components/data-table";
import { PaginationLinks, PaginationMeta } from "@narsil-ui/components/pagination";
import { type IconName } from "@narsil-ui/registries/icons";
import { type ColumnDef } from "@tanstack/react-table";

export type ConditionData = {
  handle: string;
  operator: string;
  value: string;
};

export type DataTableCollection<T = TableData> = {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta & {
    columns: ColumnDef<T>[];
    routes: RoutesData;
    tableData: TableStateData;
    [key: string]: unknown;
  };
};

export type FieldsetData = {
  conditions: ConditionData[];
  description?: string | null;
  elements: Array<FieldsetData | FieldData>;
  id?: string | null;
  label?: string | null;
  [key: string]: unknown;
};

export type FormData = {
  action: string;
  method: string;
  id: string;
  steps: FormStepData[];
  submitIcon?: string | null;
  submitLabel: string;
};

export type FormStepData = {
  description?: string | null;
  elements: Array<FieldsetData | FieldData>;
  id?: string | null;
  label?: string | null;
};

export type FieldData = {
  append?: string | null;
  className?: string | null;
  conditions: ConditionData[];
  description?: string | null;
  icon?: string | null;
  id: string;
  label: string;
  readOnly?: boolean;
  required?: boolean;
  translatable: boolean;
  width: number;
  input: {
    type: string;
    [key: string]: any;
  };
};

export type OptionData<T = unknown> = {
  [key: string]: unknown;
  icon?: IconName;
  label: string | Record<string, string>;
  value: T;
};

export type RoutesData = Record<string, string> & {
  parameters?: Record<string, unknown>;
};

export type TableStateData = {
  column_filters: { id: string; value: unknown }[];
  column_order: string[];
  column_visibility: Record<string, boolean>;
  global_filter: string;
  page_size: number;
  row_selection: Record<string, boolean>;
  sorting: { id: string; desc: boolean }[];
  table_name: string;
};

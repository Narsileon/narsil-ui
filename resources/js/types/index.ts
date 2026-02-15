import { type IconName } from "@narsil-ui/registries/icons";

export type OptionData = {
  [key: string]: unknown;
  icon?: IconName;
  label: string | Record<string, string>;
  value: unknown;
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

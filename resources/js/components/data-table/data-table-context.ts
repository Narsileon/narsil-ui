import { Table } from "@tanstack/react-table";
import { createContext, useContext } from "react";
import { type Data } from ".";

export type DataTableContextProps = Table<Data> & {
  table_name: string;
};

export const DataTableContext = createContext<DataTableContextProps | null>(null);

function useDataTable() {
  const context = useContext(DataTableContext);

  if (!context) {
    throw new Error("useDataTable must be used within a DataTableProvider.");
  }

  return context;
}

export default useDataTable;

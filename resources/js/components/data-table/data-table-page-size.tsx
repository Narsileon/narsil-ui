import { useDataTable } from "@narsil-ui/components/data-table";
import { Select } from "@narsil-ui/components/select";
import { useTranslator } from "@narsil-ui/components/translator";
import { type ComponentProps, useState } from "react";

function DataTablePageSize({ ...props }: ComponentProps<"div">) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const [pageSize, setPageSize] = useState((table.getState().pagination.pageSize ?? 10).toString());

  const label = trans("data-table.pagination", { fallback: "Rows per page" });

  return (
    <div data-slot="data-table-page-size" {...props}>
      <span className="truncate">{label}</span>
      <Select
        aria-label={label}
        options={["10", "25", "50", "100"]}
        value={pageSize}
        onValueChange={(value) => {
          setPageSize(value as string);
          table.setPageSize(Number(value));
        }}
      />
    </div>
  );
}

export default DataTablePageSize;

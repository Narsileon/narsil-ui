import {
  DataTablePageSize,
  DataTableResults,
  DataTableSelection,
} from "@narsil-ui/components/data-table";
import {
  Pagination,
  type PaginationLinks,
  type PaginationMeta,
} from "@narsil-ui/components/pagination";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type DataTableProps = ComponentProps<"div"> & {
  links: PaginationLinks;
  meta: PaginationMeta;
};

function DataTableFooter({ className, links, meta, ...props }: DataTableProps) {
  return (
    <div
      data-slot="data-table-footer"
      className={cn("flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center")}
      {...props}
    >
      <DataTableSelection meta={meta} />
      <div className="flex w-full items-center justify-between gap-4 sm:w-fit sm:justify-end">
        <DataTablePageSize className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:items-center" />
        <div className="flex flex-col items-end gap-x-4 gap-y-2 sm:flex-row sm:items-center">
          <DataTableResults meta={meta} />
          <Pagination links={links} />
        </div>
      </div>
    </div>
  );
}

export default DataTableFooter;

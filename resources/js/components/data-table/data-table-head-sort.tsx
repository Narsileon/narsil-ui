import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { Header } from "@tanstack/react-table";
import { type ComponentProps } from "react";

type DataTableHeadSortProps = ComponentProps<typeof Button> & {
  header: Header<any, unknown>;
};

function DataTableHeadSort({ className, header, ...props }: DataTableHeadSortProps) {
  const { trans } = useTranslator();

  function getIconName() {
    switch (header.column.getIsSorted()) {
      case "asc":
        return "chevron-up";
      case "desc":
        return "chevron-down";
      default:
        return "chevrons-up-down";
    }
  }

  const label = trans("ui.sort", { fallback: "Sort" });

  return (
    <Tooltip tooltip={label}>
      <Button
        aria-label={label}
        className={className}
        size="icon-sm"
        variant="ghost-secondary"
        onClick={header.column.getToggleSortingHandler()}
        {...props}
      >
        <Icon name={getIconName()} />
      </Button>
    </Tooltip>
  );
}

export default DataTableHeadSort;

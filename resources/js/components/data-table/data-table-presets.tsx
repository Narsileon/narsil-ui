import { router } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import { useDataTable } from "@narsil-ui/components/data-table";
import { PopoverTrigger } from "@narsil-ui/components/popover";
import { useTranslator } from "@narsil-ui/components/translator";
import { type ComponentProps } from "react";
import { route } from "ziggy-js";

type DataTableSettingsProps = ComponentProps<typeof PopoverTrigger>;

function DataTablePresets({ ...props }: DataTableSettingsProps) {
  const { trans } = useTranslator();

  const table = useDataTable();

  return (
    <div>
      <Button
        onClick={() => {
          router.post(
            route("narsil.data-tables.destroy"),
            {
              table_name: table.table_name,
            },
            {
              preserveState: false,
            },
          );
        }}
      >
        {trans("ui.reset", { fallback: "reset" })}
      </Button>
    </div>
  );
}

export default DataTablePresets;

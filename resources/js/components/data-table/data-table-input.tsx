import { Button } from "@narsil-ui/components/button";
import { ButtonGroup } from "@narsil-ui/components/button-group";
import { DataTableColumnFilters, useDataTable } from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import { InputContent } from "@narsil-ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@narsil-ui/components/input-group";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { debounce } from "lodash-es";
import { useEffect, useMemo, useState, type ComponentProps } from "react";

type DataTableInputProps = ComponentProps<typeof InputContent>;

function DataTableInput({ className, ...props }: DataTableInputProps) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const [value, setValue] = useState(table.getState().globalFilter || "");

  const debouncedSetValue = useMemo(
    () =>
      debounce((value: string) => {
        table.setGlobalFilter(value);
      }, 300),
    [table],
  );

  useEffect(() => {
    debouncedSetValue(value);
  }, [value, debouncedSetValue]);

  const filterLabel = trans("data-table.filters", { fallback: "Filters" });

  return (
    <ButtonGroup className="grow justify-end">
      <InputGroup className="max-w-3xs place-self-center transition-all duration-300 focus-within:max-w-lg">
        <InputGroupAddon>
          <Icon name="search" />
        </InputGroupAddon>
        <InputGroupInput
          placeholder={trans("placeholders.search")}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          {...props}
        />
        {table.getState().globalFilter ? (
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-sm" onClick={() => setValue("")}>
              <Icon name="x" />
            </InputGroupButton>
          </InputGroupAddon>
        ) : null}
      </InputGroup>
      <Tooltip tooltip={filterLabel}>
        <DataTableColumnFilters
          render={
            <Button aria-label={filterLabel} className="border-secondary" variant="secondary">
              <Icon name="filter" />
            </Button>
          }
        />
      </Tooltip>
    </ButtonGroup>
  );
}

export default DataTableInput;

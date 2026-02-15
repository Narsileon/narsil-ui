import { Form } from "@base-ui/react";
import { useForm } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import { Combobox } from "@narsil-ui/components/combobox";
import { useDataTable } from "@narsil-ui/components/data-table";
import { FieldLabel, FieldRoot } from "@narsil-ui/components/field";
import { Input } from "@narsil-ui/components/input";
import {
  PopoverClose,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { Separator } from "@narsil-ui/components/separator";
import { useTranslator } from "@narsil-ui/components/translator";
import { useState, type ComponentProps, type SubmitEvent } from "react";

const FORM_ID = "filter-form";

function DataTableFilterForm({ ...props }: ComponentProps<typeof PopoverTrigger>) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const columns = table.getAllColumns().filter((column) => column.getCanFilter());

  const [column, setColumn] = useState(columns[0]);
  const [open, setOpen] = useState(false);

  const { data, setData } = useForm({
    id: column?.id,
    operator: "",
    value: "",
  });

  function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    column?.setFilterValue(
      JSON.stringify({
        operator: data.operator,
        value: data.value,
      }),
    );

    setOpen(false);
  }

  return (
    <PopoverRoot open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger {...props} />
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup>
            <Form id={FORM_ID} className="flex flex-col gap-4" onSubmit={onSubmit}>
              <FieldRoot>
                <FieldLabel required={true}>
                  {trans("data-table.column", { fallback: "Column" })}
                </FieldLabel>
                <Combobox
                  id="id"
                  options={columns.map((column) => {
                    return {
                      value: column.id,
                      label: column.columnDef.header as string,
                    };
                  })}
                  required={true}
                  value={data.id}
                  setValue={(value) => {
                    setColumn(columns.find((column) => column.id === value) ?? columns[0]);

                    setData({
                      id: value as string,
                      operator: "",
                      value: "",
                    });
                  }}
                />
              </FieldRoot>
              {column ? (
                <>
                  <FieldRoot>
                    <FieldLabel required={true}>
                      {trans("data-table.operator", { fallback: "Operator" })}
                    </FieldLabel>
                    <Combobox
                      id="operator"
                      displayValue={false}
                      options={column.columnDef.meta?.operators || []}
                      required={true}
                      value={data.operator}
                      setValue={(value) => {
                        setData("operator", value as string);
                      }}
                    />
                  </FieldRoot>
                  <FieldRoot>
                    <FieldLabel required={true}>
                      {trans("data-table.filter", { fallback: "Filter" })}
                    </FieldLabel>
                    <Input
                      id="value"
                      required={true}
                      type={column.columnDef.meta?.input_type}
                      value={data.value}
                      onValueChange={(value) => {
                        setData("value", value);
                      }}
                    />
                  </FieldRoot>
                </>
              ) : null}
              <Separator />
              <div className="flex items-center justify-between">
                <PopoverClose
                  render={
                    <Button variant="secondary">
                      {trans("ui.cancel", { fallback: "Cancel" })}
                    </Button>
                  }
                />
                <Button form={FORM_ID} variant="primary" type="submit">
                  {trans("ui.apply", { fallback: "Apply" })}
                </Button>
              </div>
            </Form>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
}

export default DataTableFilterForm;

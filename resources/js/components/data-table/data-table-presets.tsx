import { router } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import {
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@narsil-ui/components/card";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import {
  PopoverClose,
  PopoverCloseButton,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { ToggleGroupItem, ToggleGroupRoot } from "@narsil-ui/components/toggle-group";
import { useTranslator } from "@narsil-ui/components/translator";
import useFetchForm from "@narsil-ui/hooks/use-fetch-form";
import { Fragment, useState, type ComponentProps } from "react";
import { route } from "ziggy-js";
import { useDataTable, type Presets } from ".";

type DataTablePresetsProps = ComponentProps<typeof ToggleGroupRoot> & {
  presets: Presets;
};

function DataTablePresets({ presets, ...props }: DataTablePresetsProps) {
  const { trans } = useTranslator();

  const { form, fetchForm } = useFetchForm(presets.form);

  const table = useDataTable();

  const [open, setOpen] = useState<boolean>(false);

  function handleChange(value: string) {
    router.post(
      route("narsil.tables.update", presets.data[0].uuid),
      {
        _method: "patch",
        preset_uuid: value,
      },
      {
        preserveScroll: true,
        preserveState: true,
      },
    );
  }

  function onOpenChange(value: boolean) {
    if (!form) {
      fetchForm();
    }

    setOpen(value);
  }

  return (
    <div className="group flex grow items-center justify-start gap-2">
      <ToggleGroupRoot
        className="w-fit"
        defaultValue={[table.uuid]}
        multiple={false}
        spacing={2}
        {...props}
      >
        {presets.data.map((preset, index) => {
          return (
            <ToggleGroupItem
              value={preset.uuid}
              onClick={() => {
                handleChange(preset.uuid);
              }}
              key={index}
            >
              {preset.name}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroupRoot>
      <PopoverRoot open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger
          className="opacity-0 group-hover:opacity-100"
          render={<Button variant="ghost">Add</Button>}
        />
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup className="border-none p-0">
              {form ? (
                <FormProvider
                  id={form.id}
                  action={route("narsil.tables.replicate", table.uuid)}
                  method="post"
                  steps={form.steps}
                  render={() => {
                    return (
                      <CardRoot>
                        <CardHeader className="border-b">
                          <CardTitle>{trans("data-table.preset")}</CardTitle>
                          <CardAction>
                            <PopoverClose>
                              <PopoverCloseButton />
                            </PopoverClose>
                          </CardAction>
                        </CardHeader>
                        <CardContent>
                          <FormRoot className="grid-cols-12 gap-4">
                            {form.steps.map((step, index) => {
                              return (
                                <Fragment key={index}>
                                  {step.elements?.map((element, index) => {
                                    return <FormElement {...element} key={index} />;
                                  })}
                                </Fragment>
                              );
                            })}
                          </FormRoot>
                        </CardContent>
                        <CardFooter className="justify-between border-t">
                          <Button variant="secondary" onClick={() => onOpenChange(false)}>
                            {trans("ui.cancel")}
                          </Button>
                          <Button form={form.id} type="submit">
                            {form.submitLabel}
                          </Button>
                        </CardFooter>
                      </CardRoot>
                    );
                  }}
                />
              ) : null}
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>
    </div>
  );
}

export default DataTablePresets;

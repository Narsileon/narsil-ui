import { Checkbox } from "@narsil-ui/components/checkbox";
import {
  TableBody,
  TableCell,
  TableRoot,
  TableRow,
  TableWrapper,
} from "@narsil-ui/components/table";
import { useTranslator } from "@narsil-ui/components/translator";
import type { OptionData, UniqueIdentifier } from "@narsil-ui/types";
import { type ReactNode } from "react";

type CheckboxesProps = {
  options: OptionData<UniqueIdentifier>[];
  values: UniqueIdentifier[];
  onChange: (value: UniqueIdentifier[]) => void;
};

function Checkboxes({ options = [], values, onChange }: CheckboxesProps) {
  const { trans } = useTranslator();

  function toggleValue(value: UniqueIdentifier) {
    if (values.includes(value)) {
      onChange(values.filter((x) => x !== value));
    } else {
      onChange([...values, value]);
    }
  }

  function renderCheckboxes(options: OptionData[]): ReactNode {
    const checkboxes = options.flatMap((option) => option.value) as UniqueIdentifier[];

    const checkedCheckboxes = checkboxes.filter((value) => values.includes(value));

    const allChecked = checkedCheckboxes.length === checkboxes.length;
    const someChecked = checkedCheckboxes.length > 0 && !allChecked;

    const toggleAll = () => {
      if (allChecked) {
        onChange(values.filter((value) => !checkboxes.includes(value)));
      } else {
        onChange(Array.from(new Set<UniqueIdentifier>([...values, ...checkboxes])));
      }
    };

    return (
      <>
        <TableRow className="border-b-2 bg-accent">
          <TableCell>
            <div className="flex items-center justify-start gap-2">
              <Checkbox
                checked={allChecked}
                indeterminate={someChecked}
                onCheckedChange={toggleAll}
              />
              <label>{trans("ui.all")}</label>
            </div>
          </TableCell>
        </TableRow>
        {options.flatMap((option, index) => {
          const checked = values.includes(option.value as UniqueIdentifier);

          return (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center justify-start gap-2">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggleValue(option.value as UniqueIdentifier)}
                  />
                  <label>{option.label as string}</label>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </>
    );
  }

  return (
    <TableWrapper>
      <TableRoot>
        <TableBody>{renderCheckboxes(options)}</TableBody>
      </TableRoot>
    </TableWrapper>
  );
}

export default Checkboxes;

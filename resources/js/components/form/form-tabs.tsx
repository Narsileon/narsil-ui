import { FormBlock, FormElement } from "@narsil-ui/components/form";
import { TabsList, TabsPanel, TabsRoot, TabsTab } from "@narsil-ui/components/tabs";
import { FormStepData } from "@narsil-ui/types";
import { useState } from "react";

type FormTabsProps = {
  steps: FormStepData[];
};

function FormTabs({ steps }: FormTabsProps) {
  const [value, setValue] = useState(steps[0].id);

  return (
    <TabsRoot
      className="col-span-full"
      defaultValue={steps[0].id}
      value={value}
      onValueChange={setValue}
    >
      {steps.length > 1 ? (
        <TabsList className="sticky top-0 z-10 flex w-full items-center border-b bg-background px-4">
          {steps.map((step, index) => {
            return (
              <TabsTab value={step.id} key={index}>
                {step.label}
              </TabsTab>
            );
          })}
        </TabsList>
      ) : null}
      {steps.map((step, index) => {
        return (
          <TabsPanel
            className="grid w-full max-w-5xl grid-cols-12 gap-x-4 gap-y-8 place-self-center"
            value={step.id}
            key={index}
          >
            {step.elements?.map((element, index) => {
              return (
                <FormElement
                  {...element}
                  render={(fieldset) => {
                    return <FormBlock baseId={element.id as string} fieldset={fieldset} />;
                  }}
                  key={index}
                />
              );
            })}
          </TabsPanel>
        );
      })}
    </TabsRoot>
  );
}

export default FormTabs;

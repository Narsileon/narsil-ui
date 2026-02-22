import { Button } from "@narsil-ui/components/button";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData } from "@narsil-ui/types";
import { Fragment } from "react";

type UserPasswordProps = {
  form: FormData;
};

function UserPassword({ form }: UserPasswordProps) {
  const { trans } = useTranslator();

  return (
    <FormProvider
      id={form.id}
      action={form.action}
      method={form.method}
      steps={form.steps}
      render={({ reset, setDefaults }) => {
        return (
          <SectionRoot>
            <SectionHeader className="border-b">
              <Heading level="h2">{trans("ui.password")}</Heading>
              <Button form={form.id} type="submit">
                {form.submitIcon && <Icon name={form.submitIcon} />}
                {form.submitLabel}
              </Button>
            </SectionHeader>
            <SectionContent>
              <FormRoot
                className="grid-cols-12 gap-4"
                options={{
                  onSuccess: () => {
                    reset?.();
                    setDefaults?.();
                  },
                }}
              >
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
            </SectionContent>
          </SectionRoot>
        );
      }}
    />
  );
}

export default UserPassword;

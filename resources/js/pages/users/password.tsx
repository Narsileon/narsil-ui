import { Button } from "@narsil-ui/components/button";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData } from "@narsil-ui/types";
import { Fragment } from "react";

type UserPasswordProps = {
  updatePasswordForm: FormData;
};

function UserPassword({ updatePasswordForm }: UserPasswordProps) {
  const { trans } = useTranslator();

  return (
    <FormProvider
      id={updatePasswordForm.id}
      action={updatePasswordForm.action}
      method={updatePasswordForm.method}
      steps={updatePasswordForm.steps}
      render={({ reset, setDefaults }) => {
        return (
          <SectionRoot>
            <SectionHeader className="border-b">
              <Heading level="h2">{trans("ui.password")}</Heading>
              <Button form={updatePasswordForm.id} type="submit">
                {updatePasswordForm.submitIcon && <Icon name={updatePasswordForm.submitIcon} />}
                {updatePasswordForm.submitLabel}
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
                {updatePasswordForm.steps.map((step, index) => {
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

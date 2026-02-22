import { Button } from "@narsil-ui/components/button";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData, UserData } from "@narsil-ui/types";
import { Fragment } from "react";

type UserProfileProps = {
  auth: UserData;
  form: FormData;
};

function UserProfile({ auth, form }: UserProfileProps) {
  const { trans } = useTranslator();

  const initialData = {
    avatar: auth?.avatar,
    first_name: auth?.first_name,
    last_name: auth?.last_name,
  };

  return (
    <FormProvider
      id={form.id}
      action={form.action}
      initialData={initialData}
      method={form.method}
      steps={form.steps}
      render={() => {
        return (
          <SectionRoot>
            <SectionHeader className="border-b">
              <Heading level="h2">{trans("ui.account")}</Heading>
              <Button form={form.id} type="submit">
                {form.submitIcon && <Icon name={form.submitIcon} />}
                {form.submitLabel}
              </Button>
            </SectionHeader>
            <SectionContent>
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
            </SectionContent>
          </SectionRoot>
        );
      }}
    />
  );
}

export default UserProfile;

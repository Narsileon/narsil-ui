import { Button } from "@narsil-ui/components/button";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { Separator } from "@narsil-ui/components/separator";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData, UserData } from "@narsil-ui/types";
import { Fragment } from "react";

type UserProfileProps = {
  auth?: UserData;
  profileForm: FormData;
  updatePasswordForm: FormData;
};

function UserProfile({ auth, profileForm, updatePasswordForm }: UserProfileProps) {
  const { trans } = useTranslator();

  const initialData = {
    avatar: auth?.avatar,
    first_name: auth?.first_name,
    last_name: auth?.last_name,
  };

  return (
    <>
      <FormProvider
        id={profileForm.id}
        action={profileForm.action}
        initialData={initialData}
        method={profileForm.method}
        steps={profileForm.steps}
        render={() => {
          return (
            <SectionRoot>
              <SectionHeader className="border-b">
                <Heading level="h2">{trans("ui.account")}</Heading>
                <Button form={profileForm.id} type="submit">
                  {profileForm.submitIcon && <Icon name={profileForm.submitIcon} />}
                  {profileForm.submitLabel}
                </Button>
              </SectionHeader>
              <SectionContent>
                <FormRoot className="grid-cols-12 gap-4">
                  {profileForm.steps.map((step, index) => {
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
      <Separator />
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
    </>
  );
}

export default UserProfile;

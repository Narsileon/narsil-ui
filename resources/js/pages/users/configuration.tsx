import { router } from "@inertiajs/react";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { SectionContent, SectionHeader, SectionRoot } from "@narsil-ui/components/section";
import { useTranslator } from "@narsil-ui/components/translator";
import { useColorStore } from "@narsil-ui/stores/color-store";
import { useModalStore } from "@narsil-ui/stores/modal-store";
import { useRadiusStore } from "@narsil-ui/stores/radius-store";
import { FormData, UniqueIdentifier } from "@narsil-ui/types";
import { Fragment } from "react";
import { route } from "ziggy-js";

type UserConfigurationProps = {
  userConfigurationForm: FormData;
};

function UserConfiguration({ userConfigurationForm }: UserConfigurationProps) {
  const { reloadTopModal } = useModalStore();
  const { trans } = useTranslator();

  const { locale } = useTranslator();

  const { color, setColor } = useColorStore();
  const { radius, setRadius } = useRadiusStore();

  function handleChange(id: string, value: UniqueIdentifier) {
    switch (id) {
      case "color":
        setColor(value as string);
        return;
      case "radius":
        setRadius(value as number);
        return;
      default:
        router.post(
          route("user-configurations.update"),
          {
            [id]: value,
          },
          {
            preserveState: false,
            onSuccess: () => {
              reloadTopModal();
            },
          },
        );
        break;
    }
  }

  const initialData = {
    color: color,
    language: locale,
    radius: radius,
  };

  return (
    <SectionRoot>
      <SectionHeader className="border-b">
        <Heading level="h2">{trans("ui.personalization")}</Heading>
      </SectionHeader>
      <SectionContent>
        <FormProvider
          id={userConfigurationForm.id}
          action={userConfigurationForm.action}
          initialData={initialData}
          method={userConfigurationForm.method}
          steps={userConfigurationForm.steps}
          render={() => {
            return (
              <FormRoot className="gap-4">
                {userConfigurationForm.steps.map((step, index) => {
                  return (
                    <Fragment key={index}>
                      {step.elements?.map((element, index) => {
                        return (
                          <FormElement
                            {...element}
                            onChange={(value) =>
                              handleChange(element.id as string, value as UniqueIdentifier)
                            }
                            key={index}
                          />
                        );
                      })}
                    </Fragment>
                  );
                })}
              </FormRoot>
            );
          }}
        />
      </SectionContent>
    </SectionRoot>
  );
}

export default UserConfiguration;

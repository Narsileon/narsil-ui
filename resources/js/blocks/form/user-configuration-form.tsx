import { router } from "@inertiajs/react";
import { FormElement, FormProvider, FormRoot, registry } from "@narsil-ui/components/form";
import { useTranslator } from "@narsil-ui/components/translator";
import { useColorStore } from "@narsil-ui/stores/color-store";
import { useRadiusStore } from "@narsil-ui/stores/radius-store";
import type { FormData } from "@narsil-ui/types";
import { Fragment } from "react";
import { route } from "ziggy-js";

type UserConfigurationFormProps = {
  form: FormData;
  onSuccess?: () => void;
};

function UserConfigurationForm({ form, onSuccess }: UserConfigurationFormProps) {
  const { locale } = useTranslator();

  const { color, setColor } = useColorStore();
  const { radius, setRadius } = useRadiusStore();

  function handleChange(id: string, value: number | string) {
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
            onSuccess: onSuccess,
          },
        );
        break;
    }
  }

  return (
    <FormProvider
      id={form.id}
      action={form.action}
      method={form.method}
      steps={form.steps}
      initialData={{
        color: color,
        language: locale,
        radius: radius,
      }}
      render={() => {
        return (
          <FormRoot className="gap-4">
            {form.steps.map((step, index) => {
              return (
                <Fragment key={index}>
                  {step.elements?.map((element, index) => {
                    return (
                      <FormElement
                        {...element}
                        registry={registry}
                        onChange={(value) =>
                          handleChange(element.id as string, value as number | string)
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
  );
}

export default UserConfigurationForm;

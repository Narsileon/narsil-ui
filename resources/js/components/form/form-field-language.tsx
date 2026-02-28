import { useForm } from "@narsil-ui/components/form";
import { Select } from "@narsil-ui/components/select";
import { type ComponentProps } from "react";

type FormFieldLanguageProps = Omit<ComponentProps<typeof Select>, "options">;

function FormFieldLanguage({ ...props }: FormFieldLanguageProps) {
  const { languages } = useForm();

  return languages?.length > 0 ? (
    <Select
      data-slot="form-language"
      className="uppercase"
      options={languages}
      size="sm"
      variant="inline"
      {...props}
    />
  ) : null;
}

export default FormFieldLanguage;

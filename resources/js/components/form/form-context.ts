import { type InertiaFormProps } from "@inertiajs/react";
import { OptionData } from "@narsil-ui/types";
import { createContext, useContext } from "react";

export type FormContextProps = Partial<InertiaFormProps<Record<string, any>>> & {
  action: string;
  defaultLanguage: string;
  formLanguage: string;
  id: string;
  languages: OptionData[];
  method: string;
  setFormLanguage: (value: string) => void;
};

export const FormContext = createContext<FormContextProps | null>(null);

function useForm() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm must be used within a FormProvider.");
  }

  return context;
}

export default useForm;

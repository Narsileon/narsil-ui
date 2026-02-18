import { createContext, useContext } from "react";

export type FormFieldContextProps = {
  error: string | undefined;
  fieldLanguage: string;
  id: string;
  setFieldLanguage: (value: string) => void;
};

export const FormFieldContext = createContext<FormFieldContextProps | null>(null);

function useFormField() {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw new Error("useFormField must be used within a FormField.");
  }

  return context;
}

export default useFormField;

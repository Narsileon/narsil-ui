import type { UserData } from "@narsil-ui/types";
import FormBlame from "./form-blame";
import FormBlameItem from "./form-blame-item";
import FormBlock from "./form-block";
import useForm from "./form-context";
import FormElement from "./form-element";
import FormField from "./form-field";
import useFormField from "./form-field-context";
import FormFieldLanguage from "./form-field-language";
import FormLanguage from "./form-language";
import FormMenu from "./form-menu";
import FormProvider from "./form-provider";
import FormRoot from "./form-root";
import FormSave from "./form-save";
import FormTabs from "./form-tabs";
import registry from "./inputs";

type FormBlameData = {
  created_at?: string;
  creator?: UserData;
  editor?: UserData;
  updated_at?: string;
};

export {
  FormBlame,
  FormBlameItem,
  FormBlock,
  FormElement,
  FormField,
  FormFieldLanguage,
  FormLanguage,
  FormMenu,
  FormProvider,
  FormRoot,
  FormSave,
  FormTabs,
  registry,
  useForm,
  useFormField,
};

export type { FormBlameData };

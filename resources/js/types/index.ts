import { type IconName } from "@narsil-ui/registries/icons";

export type OptionData = {
  [key: string]: unknown;
  icon?: IconName;
  label: string | Record<string, string>;
  value: unknown;
};

import { Badge } from "@narsil-ui/components/badge";
import { useForm } from "@narsil-ui/components/form";
import { Heading } from "@narsil-ui/components/heading";
import { Icon } from "@narsil-ui/components/icon";
import { ToggleGroupItem, ToggleGroupRoot } from "@narsil-ui/components/toggle-group";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps, useMemo } from "react";

type FormLanguageProps = ComponentProps<"div"> & {
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
};

function FormLanguage({ className, value, onValueChange, ...props }: FormLanguageProps) {
  const { trans } = useTranslator();

  const { defaultLanguage, languages } = useForm();

  const orderedOptions = useMemo(() => {
    const defaultOption = languages.filter((o) => o.value === defaultLanguage);
    const otherOptions = languages
      .filter((o) => o.value !== defaultLanguage)
      .sort((a, b) => String(a.label).localeCompare(String(b.label)));

    return [...defaultOption, ...otherOptions];
  }, [defaultLanguage, languages]);

  const currentOption =
    orderedOptions.find((option) => option.value === value) ?? orderedOptions[0];

  return (
    <div className={cn("grid gap-1 border-b p-2", className)} {...props}>
      <div className="flex items-center justify-start gap-2 pl-2.5">
        <Icon className="size-4" name="globe" />
        <Heading level="h3" variant="discreet">
          {trans("ui.translations")}
        </Heading>
      </div>
      <ToggleGroupRoot
        defaultValue={[currentOption.value as string]}
        multiple={false}
        orientation="vertical"
        spacing={1}
      >
        {orderedOptions.map((option, index) => {
          return (
            <ToggleGroupItem
              className="flex w-full items-center justify-between pr-2"
              value={option.value as string}
              onClick={() => {
                onValueChange(option.value as string);
              }}
              key={index}
            >
              <span
                className={cn(
                  "relative pl-5 font-normal",
                  "before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2",
                  "before:size-1.5 before:rounded-full before:bg-constructive",
                  option.value === value
                    ? "before:animate-pulse before:bg-constructive"
                    : "before:bg-foreground",
                )}
              >
                {option.label as string}
              </span>

              {option.value === defaultLanguage ? (
                <Badge className="bg-background" variant="outline">
                  {trans("ui.default")}
                </Badge>
              ) : null}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroupRoot>
    </div>
  );
}

export default FormLanguage;

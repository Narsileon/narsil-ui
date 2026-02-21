import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type FormBlameProps = ComponentProps<"div"> & {
  date: string;
  label: string;
  name?: string;
};

function FormBlame({ className, date, label, name, ...props }: FormBlameProps) {
  const { trans } = useTranslator();

  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{date}</span>
      {name ? (
        <>
          <span className="text-muted-foreground">{trans("blame.by")}</span>
          <span className="font-medium">{name}</span>
        </>
      ) : null}
    </div>
  );
}

export default FormBlame;

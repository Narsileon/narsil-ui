import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function RichTextEditorRoot({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="rich-text-editor-root"
      className={cn("border-color flex flex-col rounded-md border", className)}
      {...props}
    />
  );
}

export default RichTextEditorRoot;

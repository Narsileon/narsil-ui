import { Button } from "@narsil-ui/components/button";
import { ModalLink } from "@narsil-ui/components/modal";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";
import { route } from "ziggy-js";

type FileBrowseProps = ComponentProps<"div"> & {
  icon?: string;
};

function FileBrowse({ className, icon, ...props }: FileBrowseProps) {
  const { trans } = useTranslator();

  return (
    <div className={cn("flex w-full items-center justify-center gap-1", className)} {...props}>
      <Button
        variant="secondary"
        render={<ModalLink href={route("assets.index")} variant="right" />}
      >
        {trans("ui.browse")}
      </Button>
      <span>{trans("ui.or")}</span>
      <Button
        variant="secondary"
        render={<ModalLink href={route("assets.create")} variant="right" />}
      >
        {trans("ui.create")}
      </Button>
    </div>
  );
}

export default FileBrowse;

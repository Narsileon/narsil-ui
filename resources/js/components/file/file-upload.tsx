import { Icon } from "@narsil-ui/components/icon";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type FileUploadProps = ComponentProps<"div"> & {
  icon?: string;
};

function FileUpload({ className, icon, ...props }: FileUploadProps) {
  const { trans } = useTranslator();

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-lg p-4 text-center",
        className,
      )}
      {...props}
    >
      <div className="size-9 rounded-full bg-muted p-2">
        <Icon name={icon ?? "upload"} />
      </div>
      <div className="flex items-center gap-1 text-sm">
        <strong className="font-medium">{trans("file.upload")}</strong>
        <span>{trans("ui.or")}</span>
        <strong className="font-medium">{trans("file.dnd")}</strong>
      </div>
    </div>
  );
}

export default FileUpload;

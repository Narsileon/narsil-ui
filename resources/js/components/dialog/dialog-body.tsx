import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function DialogBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn(
        "flex w-full flex-col gap-4 overflow-hidden overflow-y-auto p-4 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
}
export default DialogBody;

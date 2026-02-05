import { Dialog } from "@base-ui/react/dialog";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { cn } from "@narsil-ui/lib/utils";
import { type IconName } from "@narsil-ui/registries/icons";
import { type ComponentProps } from "react";

function DialogCloseButton({
  className,
  icon = "x",
  label = "Close",
  ...props
}: ComponentProps<typeof Dialog.Close> & {
  icon?: IconName;
  label?: string;
}) {
  return (
    <Tooltip tooltip={label}>
      <Dialog.Close
        data-slot="dialog-close"
        className={cn(
          "cursor-pointer rounded-full opacity-75 ring-offset-background transition-opacity",
          "disabled:pointer-events-none",
          "focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden",
          "hover:opacity-100",
          "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      >
        <Icon name={icon} />
        <span className="sr-only">{label}</span>
      </Dialog.Close>
    </Tooltip>
  );
}

export default DialogCloseButton;

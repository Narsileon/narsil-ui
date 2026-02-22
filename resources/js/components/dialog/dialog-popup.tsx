import { Dialog } from "@base-ui/react/dialog";
import { Button } from "@narsil-ui/components/button";
import { DialogClose } from "@narsil-ui/components/dialog";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import dialogPopupVariants from "./dialog-popup-variants";

function DialogPopup({
  className,
  children,
  showCloseButton = true,
  variant = "default",
  ...props
}: ComponentProps<typeof Dialog.Popup> &
  VariantProps<typeof dialogPopupVariants> & {
    showCloseButton?: boolean;
  }) {
  const { trans } = useTranslator();

  const closeLabel = trans("ui.close", { fallback: "Close" });

  return (
    <Dialog.Popup
      data-slot="dialog-popup"
      className={cn(
        dialogPopupVariants({
          className: className,
          variant: variant,
        }),
      )}
      {...props}
    >
      <span className="sr-only" tabIndex={0}>
        Dialog
      </span>
      {children}
      {showCloseButton ? (
        <Tooltip tooltip={closeLabel}>
          <DialogClose
            className="absolute top-3 right-3"
            render={
              <Button size="icon-sm" variant="ghost">
                <Icon name="x" />
                <span className="sr-only">{closeLabel}</span>
              </Button>
            }
          />
        </Tooltip>
      ) : null}
    </Dialog.Popup>
  );
}

export default DialogPopup;

import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { ComponentProps } from "react";

function PopoverCloseButton({
  size = "icon",
  variant = "ghost",
  ...props
}: ComponentProps<typeof Button>) {
  const { trans } = useTranslator();

  const label = trans("ui.close");

  return (
    <Tooltip tooltip={label}>
      <Button
        data-slot="popover-close-button"
        aria-label={label}
        size={size}
        variant={variant}
        {...props}
      >
        <Icon name="x" />
      </Button>
    </Tooltip>
  );
}

export default PopoverCloseButton;

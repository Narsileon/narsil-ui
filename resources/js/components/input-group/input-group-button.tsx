import { Button } from "@narsil-ui/components/button";
import { type ComponentProps } from "react";

type InputGroupButtonProps = ComponentProps<typeof Button>;

function InputGroupButton({
  className,
  size = "sm",
  variant = "ghost",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      data-slot="input-group-button"
      className={className}
      size={size}
      variant={variant}
      {...props}
    />
  );
}

export default InputGroupButton;

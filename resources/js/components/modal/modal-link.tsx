import { Link } from "@inertiajs/react";
import { DialogPopup } from "@narsil-ui/components/dialog";
import { useModalStore } from "@narsil-ui/stores/modal-store";
import { type ComponentProps, type MouseEvent } from "react";

type ModalLinkProps = ComponentProps<typeof Link> & {
  variant?: ComponentProps<typeof DialogPopup>["variant"];
};

function ModalLink({ as = "button", variant = "default", onClick, ...props }: ModalLinkProps) {
  const { openModal } = useModalStore();

  const Comp = as;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    openModal({ ...props }, variant);
  }

  return (
    <Comp
      data-slot="modal-link"
      aria-haspopup="dialog"
      type="button"
      onClick={handleClick}
      {...props}
    />
  );
}

export default ModalLink;

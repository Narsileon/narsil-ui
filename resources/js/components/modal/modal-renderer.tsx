import { useModalStore } from "@narsil-ui/stores/modal-store";
import { type ComponentProps } from "react";
import Modal from "./modal";

type ModalRendererProps = Pick<ComponentProps<typeof Modal>, "container">;

function ModalRenderer({ ...props }: ModalRendererProps) {
  const { modals, closeModal } = useModalStore();

  return (
    <>
      {modals.map((modal) => {
        return (
          <Modal
            modal={modal}
            onClose={() => closeModal(modal.link.href as string)}
            key={modal.link.href as string}
            {...props}
          />
        );
      })}
    </>
  );
}

export default ModalRenderer;

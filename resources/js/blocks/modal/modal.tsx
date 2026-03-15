import {
  DialogBackdrop,
  DialogBody,
  DialogDescription,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from "@narsil-ui/components/dialog";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ModalData } from "@narsil-ui/stores/modal-store";
import { useEffect, useState, type ComponentProps, type ComponentType } from "react";

type ModalProps = ComponentProps<typeof DialogPopup> & {
  modal: ModalData;
  onClose: () => void;
};

function Modal({ modal, onClose, ...props }: ModalProps) {
  const { addTranslations } = useTranslator();

  const [Component, setComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    addTranslations(modal.props.translations);
  }, [modal.props.translations]);

  useEffect(() => {
    const load = async () => {
      const [vendorPath, componentPath] = modal.component.includes("::")
        ? modal.component.split("::")
        : [null, modal.component];

      const pages = (() => {
        switch (vendorPath) {
          case "narsil/base":
          case "narsil/cms":
            return import.meta.glob(["@narsil-cms/pages/**/*.tsx", "@narsil-ui/pages/**/*.tsx"]);
          default:
            return import.meta.glob("@/pages/**/*.tsx");
        }
      })();

      const loader =
        pages[
          vendorPath
            ? `/vendor/${vendorPath}/resources/js/pages/${componentPath}.tsx`
            : `/resources/js/pages/${componentPath}.tsx`
        ];

      if (!loader) {
        return onClose();
      }

      const mod = await (loader as () => Promise<any>)();

      setComponent(() => mod.default);
    };

    load();
  }, [modal.component]);

  return (
    <DialogRoot open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup
          className={cn("overflow-hidden", modal.variant === "default" && "md:min-h-1/2")}
          variant={modal.variant}
          {...props}
        >
          <DialogHeader className="border-b">
            <DialogTitle>{modal.props.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">{modal.props.description}</DialogDescription>
          <DialogBody className="grow p-0">
            {Component ? <Component modal={modal} {...modal.props} /> : null}
          </DialogBody>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  );
}

export default Modal;

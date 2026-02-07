import { type ToastManagerAddOptions, Toast as ToastPrimitive } from "@base-ui/react/toast";
import { Icon } from "@narsil-ui/components/icon";
import { ItemActions, ItemContent, ItemMedia, ItemRoot } from "@narsil-ui/components/item";
import { useEffect } from "react";
import ToastClose from "./toast-close";
import ToastContent from "./toast-content";
import ToastDescription from "./toast-description";
import ToastPortal from "./toast-portal";
import ToastRoot from "./toast-root";
import ToastTitle from "./toast-title";
import ToastViewport from "./toast-viewport";

type ToastProps = {
  options?: ToastManagerAddOptions<object>[];
};

function Toast({ options }: ToastProps) {
  const { add, toasts } = ToastPrimitive.useToastManager();

  useEffect(() => {
    options?.map((option) => {
      add(option);
    });
  }, [options]);

  return (
    <ToastPortal>
      <ToastViewport>
        {toasts.map((toast) => {
          return (
            <ToastRoot toast={toast} key={toast.id}>
              <ToastContent
                render={
                  <ItemRoot>
                    <ItemMedia variant="icon">
                      <Icon
                        name={
                          toast.type === "success"
                            ? "circle-check"
                            : toast.type === "warning"
                              ? "warning"
                              : toast.type === "error"
                                ? "circle-x"
                                : "info"
                        }
                      />
                    </ItemMedia>
                    <ItemContent>
                      <ToastTitle />
                      <ToastDescription />
                    </ItemContent>
                    <ItemActions>
                      <ToastClose />
                    </ItemActions>
                  </ItemRoot>
                }
              />
            </ToastRoot>
          );
        })}
      </ToastViewport>
    </ToastPortal>
  );
}

export default Toast;

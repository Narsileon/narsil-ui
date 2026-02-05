import { type ToastManagerAddOptions, Toast as ToastPrimitive } from "@base-ui/react/toast";
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
              <ToastContent>
                <ToastTitle />
                <ToastDescription />
                <ToastClose />
              </ToastContent>
            </ToastRoot>
          );
        })}
      </ToastViewport>
    </ToastPortal>
  );
}

export default Toast;

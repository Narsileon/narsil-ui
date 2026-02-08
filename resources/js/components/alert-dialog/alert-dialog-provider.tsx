import { AlertDialog } from "@narsil-ui/components/alert-dialog";
import { useState, type ComponentProps, type ReactNode } from "react";
import { AlertDialogContext } from "./alert-dialog-context";

type AlertDialogProviderProps = {
  children: ReactNode;
};

function AlertDialogProvider({ children }: AlertDialogProviderProps) {
  const [alertDialog, setAlertDialog] = useState<ComponentProps<typeof AlertDialog> | null>(null);

  return (
    <AlertDialogContext.Provider value={{ setAlertDialog: setAlertDialog }}>
      {children}
      {alertDialog ? (
        <AlertDialog
          actions={alertDialog.actions}
          cancel={alertDialog.cancel}
          description={alertDialog.description}
          open={!!alertDialog}
          title={alertDialog.title}
        />
      ) : null}
    </AlertDialogContext.Provider>
  );
}

export default AlertDialogProvider;

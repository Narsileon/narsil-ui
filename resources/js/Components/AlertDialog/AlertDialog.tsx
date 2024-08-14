import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export interface AlertDialogProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> {}

const AlertDialog = AlertDialogPrimitive.Root;

export default AlertDialog;

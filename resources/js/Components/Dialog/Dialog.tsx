import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {}

const Dialog = DialogPrimitive.Root;

export default Dialog;

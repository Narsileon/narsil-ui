import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface DialogPortalProps extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

const DialogPortal = DialogPrimitive.Portal;

export default DialogPortal;

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

export interface ContextMenuPortalProps extends React.ComponentProps<typeof ContextMenuPrimitive.Portal> {}

const ContextMenuPortal = ContextMenuPrimitive.Portal;

export default ContextMenuPortal;

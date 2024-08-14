import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

export interface ContextMenuProps extends React.ComponentProps<typeof ContextMenuPrimitive.Root> {}

const ContextMenu = ContextMenuPrimitive.Root;

export default ContextMenu;

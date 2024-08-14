import * as MenubarPrimitive from "@radix-ui/react-menubar";

export interface MenubarPortalProps extends React.ComponentProps<typeof MenubarPrimitive.Portal> {}

const MenubarPortal = MenubarPrimitive.Portal;

export default MenubarPortal;

import { Popover } from "@base-ui/react/popover";

function PopoverClose({ ...props }: Popover.Close.Props) {
  return <Popover.Close data-slot="popover-close" {...props} />;
}

export default PopoverClose;

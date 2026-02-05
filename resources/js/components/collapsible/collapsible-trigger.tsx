import { Collapsible } from "@base-ui/react/collapsible";
import { cn } from "@narsil-ui/lib/utils";

function CollapsibleTrigger({ className, ...props }: Collapsible.Trigger.Props) {
  return (
    <Collapsible.Trigger
      data-slot="collapsible-trigger"
      className={cn("cursor-pointer", className)}
      {...props}
    />
  );
}

export default CollapsibleTrigger;

import { Collapsible } from "@base-ui/react/collapsible";

function CollapsibleTrigger({ ...props }: Collapsible.Trigger.Props) {
  return <Collapsible.Trigger data-slot="collapsible-trigger" {...props} />;
}

export default CollapsibleTrigger;

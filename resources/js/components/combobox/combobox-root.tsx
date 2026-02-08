import { Combobox } from "@base-ui/react";

function ComboboxRoot({ autoHighlight = true, ...props }: Combobox.Root.Props<unknown>) {
  return <Combobox.Root data-slot="combobox-root" autoHighlight={autoHighlight} {...props} />;
}

export default ComboboxRoot;

import { Separator } from "@narsil-ui/components/separator";
import { useMinMd } from "@narsil-ui/hooks/use-breakpoints";
import { ComponentProps } from "react";

function TabsSeparator({ orientation = "vertical", ...props }: ComponentProps<typeof Separator>) {
  const minMd = useMinMd();

  orientation = minMd ? orientation : "horizontal";

  return <Separator orientation={orientation} {...props} />;
}

export default TabsSeparator;

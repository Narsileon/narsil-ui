import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { cn } from "@narsil-ui/lib/utils";

function NavigationMenuLink({ className, ...props }: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 ring-2 ring-transparent transition-all",
        "[&_svg:not([class*='size-'])]:size-4",
        "[&_a]:outline-none",
        "data-active:text-primary",
        "focus-within:text-primary",
        "hover:text-primary",
        "in-data-[slot=navigation-menu-content]:rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export default NavigationMenuLink;

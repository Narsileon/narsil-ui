import { cn } from "@narsil-ui/Components";
import { toggleVariants } from "./Toggle";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
	size: "default",
	variant: "default",
});

type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
	VariantProps<typeof toggleVariants> & {};

const ToggleGroup = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Root>, ToggleGroupProps>(
	({ className, variant, size, children, ...props }, ref) => (
		<ToggleGroupPrimitive.Root
			ref={ref}
			className={cn("flex items-center justify-center gap-1", className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	)
);

export function useToggleGroup() {
	const context = React.useContext(ToggleGroupContext);

	if (!context) {
		throw new Error("useToggleGroup must be used within a <ToggleGroup />");
	}

	return context;
}

export default ToggleGroup;

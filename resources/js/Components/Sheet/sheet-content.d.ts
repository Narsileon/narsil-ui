type SheetVariantProps = import("class-variance-authority").VariantProps<typeof import("./SheetContent").sheetVariants>;

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof import("@radix-ui/react-dialog").Content>,
		SheetVariantProps {}

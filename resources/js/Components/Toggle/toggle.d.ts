type ToggleVariantProps = import("class-variance-authority").VariantProps<typeof import("./Toggle").toggleVariants>;

interface ToggleProps extends React.ComponentProps<typeof import("@radix-ui/react-toggle").Root>, ToggleVariantProps {}

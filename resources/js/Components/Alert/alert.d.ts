type AlertVariantProps = import("class-variance-authority").VariantProps<typeof import("./Alert").alertVariants>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariantProps {}

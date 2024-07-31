type BadgeVariantProps = import("class-variance-authority").VariantProps<typeof import("./Badge").badgeVariants>;

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariantProps {}

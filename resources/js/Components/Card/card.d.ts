type CardVariantProps = import("class-variance-authority").VariantProps<typeof import("./Card").cardVariants>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CardVariantProps {}

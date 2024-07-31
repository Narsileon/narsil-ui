type HeadingVariantProps = import("class-variance-authority").VariantProps<typeof import("./Heading").headingVariants>;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, HeadingVariantProps {
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

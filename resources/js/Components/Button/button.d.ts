type ButtonVariantProps = import("class-variance-authority").VariantProps<typeof import("./Button").buttonVariants>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
	asChild?: boolean;
	isActive?: boolean;
}

type ToastVariantProps = import("class-variance-authority").VariantProps<typeof import("./Toast").toastVariants>;

interface ToastProps extends React.ComponentProps<typeof import("@radix-ui/react-toast").Root>, ToastVariantProps {}

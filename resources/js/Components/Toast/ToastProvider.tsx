import * as ToastPrimitives from "@radix-ui/react-toast";

export interface ToastProviderProps extends React.ComponentProps<typeof ToastPrimitives.Provider> {}

const ToastProvider = ToastPrimitives.Provider;

export default ToastProvider;

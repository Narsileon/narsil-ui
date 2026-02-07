import { Toast } from "@base-ui/react/toast";
import { cn } from "@narsil-ui/lib/utils";

function ToastTitle({ className, ...props }: Toast.Title.Props) {
  return (
    <Toast.Title
      data-slot="toast-title"
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

export default ToastTitle;

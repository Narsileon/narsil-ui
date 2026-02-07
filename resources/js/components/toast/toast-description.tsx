import { Toast } from "@base-ui/react/toast";
import { cn } from "@narsil-ui/lib/utils";

function ToastDescription({ className, ...props }: Toast.Description.Props) {
  return (
    <Toast.Description
      data-slot="toast-description"
      className={cn(
        "line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground",
        "group-data-[size=xs]/item:text-xs",
        "[&>a]:underline",
        "[&>a]:underline-offset-4",
        "[&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

export default ToastDescription;

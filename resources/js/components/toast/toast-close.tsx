import { Toast } from "@base-ui/react/toast";
import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";

function ToastClose({ className, ...props }: Toast.Close.Props) {
  return (
    <Toast.Close
      data-slot="toast-close"
      aria-label="Close"
      render={
        <Button size="icon-sm" variant="ghost">
          <Icon className="size-4" name="x" />
        </Button>
      }
      {...props}
    />
  );
}

export default ToastClose;

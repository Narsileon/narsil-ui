import {
  AlertDialogAction,
  AlertDialogBackdrop,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  useAlertDialog,
} from "@narsil-ui/components/alert-dialog";
import { useTranslator } from "@narsil-ui/components/translator";
import { type ComponentProps } from "react";

type AlertDialogProps = ComponentProps<typeof AlertDialogRoot> & {
  children?: React.ReactNode;
  description?: string;
  title?: string;
  actions?: ComponentProps<typeof AlertDialogAction>[];
  cancel?: ComponentProps<typeof AlertDialogCancel>;
};

function AlertDialog({
  actions,
  cancel,
  children,
  description,
  title,
  ...props
}: AlertDialogProps) {
  const { setAlertDialog } = useAlertDialog();
  const { trans } = useTranslator();

  return (
    <AlertDialogRoot {...props}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>{title ?? trans("dialogs.titles.default")}</AlertDialogTitle>
            <AlertDialogDescription>
              {description ?? trans("dialogs.descriptions.default")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex items-center gap-2">
              {actions?.map((action, index) => {
                return (
                  <AlertDialogAction
                    onClick={(event) => {
                      action.onClick?.(event);

                      setAlertDialog(null);
                    }}
                    {...action}
                    key={index}
                  >
                    {action.children ?? trans("ui.confirm")}
                  </AlertDialogAction>
                );
              })}
            </div>
            <AlertDialogCancel {...cancel}>
              {cancel?.children ?? trans("ui.cancel")}
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  );
}

export default AlertDialog;

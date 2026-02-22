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

  const defaultTitle = trans("dialogs.titles.default", {
    fallback: "Confirmation",
  });
  const defaultDescription = trans("dialogs.descriptions.default", {
    fallback: "Are you sure you want to do this?",
  });
  const defaultAction = trans("ui.confirm", {
    fallback: "Confirm",
  });
  const defaultCancel = trans("ui.cancel", {
    fallback: "Cancel",
  });

  return (
    <AlertDialogRoot {...props}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>{title ? title : defaultTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {description ? description : defaultDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex items-center gap-2">
              {actions?.map((action, index) => {
                return (
                  <AlertDialogAction
                    {...action}
                    onClick={(event) => {
                      action.onClick?.(event);

                      setAlertDialog(null);
                    }}
                    key={index}
                  >
                    {action.children ?? defaultAction}
                  </AlertDialogAction>
                );
              })}
            </div>
            <AlertDialogCancel
              {...cancel}
              onClick={(event) => {
                cancel?.onClick?.(event);

                setAlertDialog(null);
              }}
            >
              {cancel?.children ?? defaultCancel}
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  );
}

export default AlertDialog;

import { Form } from "@base-ui/react";
import { VisitOptions } from "@inertiajs/core";
import { useForm } from "@narsil-ui/components/form";
import { cn } from "@narsil-ui/lib/utils";
import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef, type ComponentProps, type SubmitEvent } from "react";

type FormRootProps = Omit<ComponentProps<"form">, "autoSave"> & {
  autoSave?: boolean;
  options?: Omit<VisitOptions, "data">;
};

function FormRoot({ autoSave, className, options, ...props }: FormRootProps) {
  const { action, data, id, isDirty, method, post, setDefaults, transform } = useForm();

  const initialized = useRef(false);

  const onSubmit = useCallback(
    (event?: SubmitEvent, autoSave?: boolean) => {
      event?.preventDefault();

      const submitOptions: VisitOptions = {
        ...options,
        preserveScroll: autoSave ? true : options?.preserveScroll,
        preserveState: autoSave ? true : options?.preserveState,
      };

      switch (method) {
        case "patch":
        case "put":
          transform?.((data) => {
            const transformedData = {
              ...data,
              _autoSave: autoSave,
              _dirty: isDirty,
              _method: method,
            };

            return transformedData;
          });
          post?.(action, submitOptions);
          break;
        case "post":
          post?.(action, submitOptions);
          break;
      }
    },
    [action, isDirty, method, options, post, transform],
  );

  useEffect(() => {
    if (!autoSave) {
      return;
    }

    if (!initialized.current) {
      initialized.current = true;

      return;
    }

    const debounced = debounce(() => {
      if (isDirty) {
        onSubmit(undefined, true);

        setDefaults?.(data ?? {});
      }
    }, 500);

    debounced();

    return () => debounced.cancel();
  }, [autoSave, data, isDirty, onSubmit]);

  return (
    <Form
      id={id}
      className={cn("grid", className)}
      action={action}
      method={method}
      onSubmit={onSubmit}
      {...props}
    />
  );
}

export default FormRoot;

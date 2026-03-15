import { type FormBlameData, FormBlameItem } from "@narsil-ui/components/form";
import { useTranslator } from "@narsil-ui/components/translator";
import { type ComponentProps } from "react";

type FormBlameProps = ComponentProps<"div"> & {
  data: FormBlameData;
};

function FormBlame({ className, data, ...props }: FormBlameProps) {
  const { trans } = useTranslator();

  if (!data.created_at && !data.updated_at) {
    return null;
  }

  return (
    <div className="grid gap-2">
      {data?.created_at ? (
        <FormBlameItem
          label={trans("blame.created")}
          date={data.created_at}
          name={data.creator?.full_name}
        />
      ) : null}
      {data?.updated_at ? (
        <FormBlameItem
          label={trans("blame.updated")}
          date={data.updated_at}
          name={data.editor?.full_name ?? data.creator?.full_name}
        />
      ) : null}
    </div>
  );
}

export default FormBlame;

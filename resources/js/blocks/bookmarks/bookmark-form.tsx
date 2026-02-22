import { Button } from "@narsil-ui/components/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@narsil-ui/components/card";
import { FormElement, FormProvider, FormRoot, registry } from "@narsil-ui/components/form";
import { useTranslator } from "@narsil-ui/components/translator";
import type { BookmarkData, FormData } from "@narsil-ui/types";
import { Fragment } from "react";
import { route } from "ziggy-js";

type BookmarkFormProps = {
  bookmark: BookmarkData;
  form: FormData;
  title: string;
  fetchBookmarks: () => Promise<void>;
  setBookmark: (bookmark: BookmarkData | null) => void;
};

function BookmarkForm({ bookmark, form, title, fetchBookmarks, setBookmark }: BookmarkFormProps) {
  const { trans } = useTranslator();

  return (
    <FormProvider
      id={form.id}
      action={route("user-bookmarks.update", bookmark.uuid)}
      method="patch"
      steps={form.steps}
      initialData={{
        name: bookmark?.name,
      }}
      render={() => {
        return (
          <CardRoot>
            <CardHeader className="border-b">
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <FormRoot
                className="grid-cols-12 gap-4"
                options={{
                  onSuccess: async () => {
                    await fetchBookmarks();

                    setBookmark(null);
                  },
                }}
              >
                {form.steps.map((step, index) => {
                  return (
                    <Fragment key={index}>
                      {step.elements?.map((element, index) => {
                        return <FormElement {...element} registry={registry} key={index} />;
                      })}
                    </Fragment>
                  );
                })}
              </FormRoot>
            </CardContent>
            <CardFooter className="justify-between border-t">
              <Button variant="secondary" onClick={() => setBookmark(null)}>
                {trans("ui.cancel", { fallback: "Cancel" })}
              </Button>
              <Button form={form.id} type="submit">
                {form.submitLabel}
              </Button>
            </CardFooter>
          </CardRoot>
        );
      }}
    />
  );
}

export default BookmarkForm;

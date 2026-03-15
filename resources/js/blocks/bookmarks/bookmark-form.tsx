import { type BookmarkData } from "@narsil-ui/blocks/bookmarks";
import { Button } from "@narsil-ui/components/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@narsil-ui/components/card";
import { FormElement, FormProvider, FormRoot } from "@narsil-ui/components/form";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData } from "@narsil-ui/types";
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

  const initialData = {
    name: bookmark?.name,
  };

  return (
    <FormProvider
      id={form.id}
      action={route("user-bookmarks.update", bookmark.uuid)}
      initialData={initialData}
      method="patch"
      steps={form.steps}
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
                        return <FormElement {...element} key={index} />;
                      })}
                    </Fragment>
                  );
                })}
              </FormRoot>
            </CardContent>
            <CardFooter className="justify-between border-t">
              <Button variant="secondary" onClick={() => setBookmark(null)}>
                {trans("ui.cancel")}
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

import { BookmarkForm, BookmarkList, type BookmarkData } from "@narsil-ui/blocks/bookmarks";
import { type BreadcrumbData } from "@narsil-ui/blocks/breadcrumb";
import { Tooltip } from "@narsil-ui/blocks/tooltip";
import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FormData } from "@narsil-ui/types";
import { sortBy } from "lodash-es";
import { useEffect, useState, type ComponentProps } from "react";
import { route } from "ziggy-js";

type BookmarksProps = ComponentProps<typeof PopoverTrigger> & {
  breadcrumb: BreadcrumbData[];
};

function Bookmarks({ breadcrumb, ...props }: BookmarksProps) {
  const { trans, addTranslations } = useTranslator();

  const [bookmark, setBookmark] = useState<BookmarkData | null>(null);
  const [bookmarks, setBookmarks] = useState<BookmarkData[]>([]);
  const [form, setForm] = useState<FormData | null>(null);
  const [open, onOpenChange] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  async function fetchBookmarks() {
    try {
      const response = await fetch(route("user-bookmarks.index"));

      const data = await response.json();

      setBookmarks(sortBy(data.data, "name"));
      setForm(data.meta.form);

      addTranslations(data.meta.translations);

      setTitle(data.meta.title);
    } catch (error) {
      console.error("[Bookmarks] Error fetching bookmarks:", error);
    }
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    fetchBookmarks();
  }, [open]);

  const menuLabel = trans("bookmarks.menu");

  return (
    <PopoverRoot open={open} onOpenChange={onOpenChange}>
      <Tooltip tooltip={menuLabel}>
        <PopoverTrigger
          {...props}
          render={
            <Button aria-label={menuLabel} size="icon" variant="ghost">
              <Icon fill="currentColor" name="star" />
            </Button>
          }
        />
      </Tooltip>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="border-none p-0">
            {bookmark && form ? (
              <BookmarkForm
                bookmark={bookmark}
                form={form}
                title={title}
                fetchBookmarks={fetchBookmarks}
                setBookmark={setBookmark}
              />
            ) : (
              <BookmarkList
                bookmarks={bookmarks}
                breadcrumb={breadcrumb}
                title={title}
                fetchBookmarks={fetchBookmarks}
                onOpenChange={onOpenChange}
                setBookmark={setBookmark}
              />
            )}
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
}

export default Bookmarks;

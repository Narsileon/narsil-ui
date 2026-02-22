import { type BreadcrumbData } from "@narsil-ui/components/breadcrumb";
import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import type { BookmarkData, FormData } from "@narsil-ui/types";
import { sortBy } from "lodash-es";
import { useEffect, useState, type ComponentProps } from "react";
import { route } from "ziggy-js";
import BookmarkForm from "./bookmark-form";
import BookmarkList from "./bookmark-list";

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

  return (
    <PopoverRoot open={open} onOpenChange={onOpenChange}>
      <Tooltip tooltip={trans("bookmarks.menu")}>
        <PopoverTrigger
          {...props}
          render={
            <Button aria-label={trans("bookmarks.menu")} size="icon" variant="ghost">
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

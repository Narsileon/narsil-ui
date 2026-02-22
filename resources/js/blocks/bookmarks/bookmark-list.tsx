import { Link, router } from "@inertiajs/react";
import { type BreadcrumbData } from "@narsil-ui/components/breadcrumb";
import { Button } from "@narsil-ui/components/button";
import { CardContent, CardHeader, CardRoot, CardTitle } from "@narsil-ui/components/card";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import type { BookmarkData } from "@narsil-ui/types";
import { route } from "ziggy-js";

type BookmarkListProps = {
  bookmarks: BookmarkData[];
  breadcrumb: BreadcrumbData[];
  title: string;
  fetchBookmarks: () => Promise<void>;
  onOpenChange: (open: boolean) => void;
  setBookmark: (bookmark: BookmarkData | null) => void;
};

function BookmarkList({
  bookmarks,
  breadcrumb,
  title,
  fetchBookmarks,
  onOpenChange,
  setBookmark,
}: BookmarkListProps) {
  const { trans } = useTranslator();

  const name = breadcrumb.map((item) => item.label).join(" > ");
  const url = window.location.origin + window.location.pathname;

  const currentBookmark = bookmarks.find((bookmark) => bookmark.url === url);

  function onAdd() {
    router.post(
      route("user-bookmarks.store"),
      {
        name: name,
        url: url,
      },
      {
        onSuccess: async () => {
          await fetchBookmarks();
        },
      },
    );
  }

  function onDelete(uuid: string) {
    router.delete(route("user-bookmarks.destroy", uuid), {
      onSuccess: async () => {
        await fetchBookmarks();
      },
    });
  }

  const addLabel = trans("ui.add", {
    fallback: "Add",
  });
  const deleteLabel = trans("ui.delete", {
    fallback: "Delete",
  });
  const editLabel = trans("ui.edit", {
    fallback: "Edit",
  });

  return (
    <CardRoot>
      <CardHeader className="flex items-center justify-between border-b">
        <CardTitle>{title}</CardTitle>
        <Tooltip tooltip={currentBookmark ? deleteLabel : addLabel}>
          <Button
            className="-my-2 size-8"
            aria-label={currentBookmark ? deleteLabel : addLabel}
            size="icon"
            variant="ghost"
            onClick={() => {
              if (currentBookmark) {
                onDelete(currentBookmark.uuid);
              } else {
                onAdd();
              }
            }}
          >
            <Icon fill={currentBookmark ? "currentColor" : "none"} name="star" />
          </Button>
        </Tooltip>
      </CardHeader>
      <CardContent>
        {bookmarks.length > 0 ? (
          <ul className="-my-2 flex flex-col gap-1">
            {bookmarks.map((bookmark) => {
              return (
                <li className="flex items-center justify-between" key={bookmark.uuid}>
                  <Button
                    className="font-normal text-foreground"
                    size="link"
                    variant="link"
                    onClick={() => onOpenChange(false)}
                    render={<Link href={bookmark.url}>{bookmark.name}</Link>}
                  />
                  <div className="flex items-center justify-between gap-1">
                    <Tooltip tooltip={editLabel}>
                      <Button
                        aria-label={editLabel}
                        size="icon-sm"
                        variant="ghost"
                        onClick={() => {
                          setBookmark(bookmark);
                        }}
                      >
                        <Icon name="edit" />
                      </Button>
                    </Tooltip>
                    <Tooltip tooltip={deleteLabel}>
                      <Button
                        aria-label={deleteLabel}
                        size="icon-sm"
                        variant="ghost"
                        onClick={() => {
                          onDelete(bookmark.uuid);
                        }}
                      >
                        <Icon name="star-off" />
                      </Button>
                    </Tooltip>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-muted-foreground">
            {trans("bookmarks.empty", {
              fallback: "You haven't added any bookmarks yet. Click on the star to add one.",
            })}
          </p>
        )}
      </CardContent>
    </CardRoot>
  );
}

export default BookmarkList;

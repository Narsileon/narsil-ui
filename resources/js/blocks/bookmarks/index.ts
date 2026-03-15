import BookmarkForm from "./bookmark-form";
import BookmarkList from "./bookmark-list";
import Bookmarks from "./bookmarks";

type BookmarkData = {
  name: string;
  url: string;
  uuid: string;
};

export { BookmarkForm, BookmarkList, Bookmarks };

export type { BookmarkData };

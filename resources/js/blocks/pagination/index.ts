import Pagination from "./pagination";

type PaginationLinks = {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
};

type PaginationMeta = {
  current_page: number;
  from: number | null;
  last_page: number;
  links: PaginationMetaLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
};

type PaginationMetaLink = {
  active: boolean;
  label: string;
  url: string | null;
};

export { Pagination };

export type { PaginationLinks, PaginationMeta, PaginationMetaLink };

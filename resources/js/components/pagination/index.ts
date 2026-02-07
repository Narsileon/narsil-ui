// https://ui.shadcn.com/docs/components/base/pagination

import Pagination from "./pagination";
import PaginationContent from "./pagination-content";
import PaginationEllipsis from "./pagination-ellipsis";
import PaginationItem from "./pagination-item";
import PaginationLink from "./pagination-link";
import PaginationRoot from "./pagination-root";

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

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationRoot,
};

export type { PaginationLinks, PaginationMeta, PaginationMetaLink };

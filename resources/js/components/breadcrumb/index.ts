// https://ui.shadcn.com/docs/components/base/breadcrumb

import Breadcrumb from "./breadcrumb";
import BreadcrumbEllipsis from "./breadcrumb-ellipsis";
import BreadcrumbItem from "./breadcrumb-item";
import BreadcrumbLink from "./breadcrumb-link";
import BreadcrumbList from "./breadcrumb-list";
import BreadcrumbPage from "./breadcrumb-page";
import BreadcrumbRoot from "./breadcrumb-root";
import BreadcrumbSeparator from "./breadcrumb-separator";

type BreadcrumbData = {
  href: string;
  label: string;
};

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
};

export type { BreadcrumbData };

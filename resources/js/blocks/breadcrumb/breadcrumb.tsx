import { Link } from "@inertiajs/react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from "@narsil-ui/components/breadcrumb";
import { Fragment, type ComponentProps } from "react";
import { type BreadcrumbData } from ".";

type BreadcrumbProps = ComponentProps<typeof BreadcrumbRoot> & {
  breadcrumb: BreadcrumbData[];
};

function Breadcrumb({ breadcrumb, ...props }: BreadcrumbProps) {
  return (
    <BreadcrumbRoot {...props}>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => {
          const isLast = index === breadcrumb.length - 1;

          return isLast ? (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : item.href ? (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href={item.href}>{item.label}</Link>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <BreadcrumbItem>{item.label}</BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}

export default Breadcrumb;

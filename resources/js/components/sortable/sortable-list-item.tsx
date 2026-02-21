import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@narsil-ui/components/button";
import { CardContent, CardHeader, CardRoot } from "@narsil-ui/components/card";
import {
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "@narsil-ui/components/collapsible";
import { Icon } from "@narsil-ui/components/icon";
import {
  SortableHandle,
  SortableItemMenu,
  type SortableData,
} from "@narsil-ui/components/sortable";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { getTranslatableData } from "@narsil-ui/lib/data";
import { cn } from "@narsil-ui/lib/utils";
import { ReactNode, useState, type ComponentProps } from "react";

type SortableListItemProps = Pick<
  ComponentProps<typeof SortableItemMenu>,
  "onMoveDown" | "onMoveUp" | "onRemove"
> & {
  children: ReactNode;
  index?: number;
  item: SortableData;
  labelKey: string;
  onItemChange?: (value: SortableData) => void;
};

function SortableListItem({
  children,
  index,
  item,
  labelKey,
  onMoveDown,
  onMoveUp,
  onRemove,
}: SortableListItemProps) {
  const { locale, trans } = useTranslator();

  const [open, setCollapsed] = useState<boolean>(true);

  const {
    attributes,
    isDragging,
    listeners,
    transform,
    transition,
    setActivatorNodeRef,
    setNodeRef,
  } = useSortable({
    id: item.uuid,
  });

  const title = getTranslatableData(item, labelKey, locale);
  const label = open ? trans("ui.collapse") : trans("ui.expand");

  return (
    <CollapsibleRoot
      ref={setNodeRef}
      className={cn(isDragging && "opacity-50")}
      open={open}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      <CardRoot>
        <CollapsibleTrigger
          className={cn(open && "border-b")}
          nativeButton={false}
          render={
            <CardHeader className="flex min-h-9 items-center justify-between gap-2 py-0! pr-1 pl-0">
              <SortableHandle ref={setActivatorNodeRef} {...attributes} {...listeners} />
              <span className="grow text-start">{title ? title : index}</span>
              <div className="flex items-center gap-1">
                <SortableItemMenu onMoveDown={onMoveDown} onMoveUp={onMoveUp} onRemove={onRemove} />
                {children ? (
                  <Tooltip tooltip={label}>
                    <Button
                      aria-label={label}
                      size="icon-sm"
                      variant="ghost"
                      onClick={() => setCollapsed(!open)}
                    >
                      <Icon
                        className={cn("duration-300", open ? "rotate-90" : "rotate-0")}
                        name="chevron-right"
                      />
                    </Button>
                  </Tooltip>
                ) : null}
              </div>
            </CardHeader>
          }
        />
        {children ? (
          <CollapsiblePanel>
            <CardContent className="grow">{children}</CardContent>
          </CollapsiblePanel>
        ) : null}
      </CardRoot>
    </CollapsibleRoot>
  );
}

export default SortableListItem;

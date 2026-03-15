import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { router } from "@inertiajs/react";
import { Button } from "@narsil-ui/components/button";
import {
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@narsil-ui/components/card";
import { useDataTable, type DataTableData } from "@narsil-ui/components/data-table";
import { Icon } from "@narsil-ui/components/icon";
import {
  PopoverClose,
  PopoverCloseButton,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from "@narsil-ui/components/popover";
import { SortableHandle, SortableItemMenu } from "@narsil-ui/components/sortable";
import { Switch } from "@narsil-ui/components/switch";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { type Column } from "@tanstack/react-table";
import { upperFirst } from "lodash-es";
import { useState, type ComponentProps } from "react";
import { route } from "ziggy-js";

type DataTableColumnsProps = ComponentProps<typeof PopoverTrigger>;

function DataTableColumns({ ...props }: DataTableColumnsProps) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const [columnOrder, setColumnOrder] = useState(table.getState().columnOrder ?? []);

  function handleColumnOrder(order: string[]) {
    setColumnOrder(order);
    table.setColumnOrder(order);
  }

  const columns = table.getAllLeafColumns().filter((column) => column.getCanHide());

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = columnOrder.indexOf(active.id as string);
    const newIndex = columnOrder.indexOf(over.id as string);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const newOrder = arrayMove(columnOrder, oldIndex, newIndex);

    handleColumnOrder(newOrder);
  }

  function onMoveUp(id: string) {
    const index = columnOrder.indexOf(id);

    if (index > 0) {
      handleColumnOrder(arrayMove(columnOrder, index, index - 1));
    }
  }

  function onMoveDown(id: string) {
    const index = columnOrder.indexOf(id);

    if (index >= 0 && index < columnOrder.length - 1) {
      handleColumnOrder(arrayMove(columnOrder, index, index + 1));
    }
  }

  return (
    <PopoverRoot modal={true}>
      <Tooltip tooltip={trans("ui.settings")}>
        <PopoverTrigger
          {...props}
          render={
            <Button variant="secondary">
              <Icon name="settings" />
            </Button>
          }
        />
      </Tooltip>
      <PopoverPortal>
        <PopoverPositioner>
          <PopoverPopup className="border-none p-0">
            <CardRoot>
              <CardHeader className="border-b">
                <CardTitle>{trans("data-table.columns")}</CardTitle>
                <CardAction>
                  <PopoverClose>
                    <PopoverCloseButton />
                  </PopoverClose>
                </CardAction>
              </CardHeader>
              <CardContent className="gap-y-0">
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <SortableContext
                    items={columns.map((column) => column.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {columns.map((column, index) => {
                      return (
                        <SortableItem
                          column={column}
                          onMoveDown={
                            index < columns.length - 1 ? () => onMoveDown(column.id) : undefined
                          }
                          onMoveUp={index !== 0 ? () => onMoveUp(column.id) : undefined}
                          key={column.id}
                        />
                      );
                    })}
                  </SortableContext>
                </DndContext>
              </CardContent>
              <CardFooter className="justify-between border-t">
                <Button
                  className="w-full"
                  onClick={() => {
                    router.delete(route("narsil.tables.destroy", table.uuid), {
                      preserveState: false,
                    });
                  }}
                >
                  {trans("ui.reset")}
                </Button>
              </CardFooter>
            </CardRoot>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
}

export default DataTableColumns;

type SortableItemProps = Pick<
  ComponentProps<typeof SortableItemMenu>,
  "onMoveDown" | "onMoveUp"
> & {
  column: Column<DataTableData, unknown>;
};

function SortableItem({ column, onMoveDown, onMoveUp }: SortableItemProps) {
  const { trans } = useTranslator();

  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: column.id,
  });

  const columnLabel = upperFirst(column.columnDef.header as string);

  const moveColumnLabel = `${trans("ui.move")} '${columnLabel}'`;

  return (
    <div
      className="flex h-9 items-center gap-2 overflow-hidden rounded-md border bg-background pr-1"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <SortableHandle
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        isDragging={isDragging}
        label={moveColumnLabel}
      />
      <span className="grow">{columnLabel}</span>
      <Switch
        checked={column.getIsVisible()}
        onCheckedChange={(value) => column.toggleVisibility(value)}
      />
      <SortableItemMenu onMoveUp={onMoveUp} onMoveDown={onMoveDown} />
    </div>
  );
}

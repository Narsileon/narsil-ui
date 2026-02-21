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
import { Data, useDataTable } from "@narsil-ui/components/data-table";
import {
  DialogBackdrop,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@narsil-ui/components/dialog";
import { Icon } from "@narsil-ui/components/icon";
import { SortableHandle } from "@narsil-ui/components/sortable";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { type Column } from "@tanstack/react-table";
import { concat, upperFirst } from "lodash-es";
import { useState, type ComponentProps } from "react";
import { route } from "ziggy-js";
import { Heading } from "../heading";
import { SectionContent, SectionHeader, SectionRoot } from "../section";

type DataTableSettingsProps = ComponentProps<typeof DialogTrigger>;

function DataTableSettings({ ...props }: DataTableSettingsProps) {
  const { trans } = useTranslator();

  const table = useDataTable();

  const [columnOrder, setColumnOrder] = useState(table.getState().columnOrder ?? []);

  function handleColumnOrder(order: string[]) {
    setColumnOrder(order);
    table.setColumnOrder(order);
  }

  const activeColumns = table
    .getAllLeafColumns()
    .filter((column) => column.getIsVisible() && column.getCanHide());

  const availableColumns = table
    .getAllLeafColumns()
    .filter((column) => !column.getIsVisible() && column.getCanHide());

  function handleActivate(column: Column<Data, unknown>) {
    column.toggleVisibility(true);

    const filteredOrder = columnOrder.filter((id) => id !== column.id);

    const menuIndex = filteredOrder.indexOf("_menu");

    const newOrder =
      menuIndex === -1
        ? concat(filteredOrder, column.id)
        : concat(filteredOrder.slice(0, menuIndex), column.id, filteredOrder.slice(menuIndex));

    handleColumnOrder(newOrder);
  }

  function handleDeactivate(column: Column<Data, unknown>) {
    column.toggleVisibility(false);

    const newOrder = columnOrder.filter((id) => id !== column.id);

    handleColumnOrder(newOrder);
  }

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

  return (
    <DialogRoot modal={true}>
      <Tooltip tooltip={trans("ui.settings")}>
        <DialogTrigger
          {...props}
          render={
            <Button variant="secondary">
              <Icon name="settings" />
            </Button>
          }
        />
      </Tooltip>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className="h-3/4 md:max-h-3/4 md:max-w-3xl">
          <DialogHeader className="border-b">
            <DialogTitle>{trans("ui.settings", { fallback: "Settings" })}</DialogTitle>
          </DialogHeader>
          <DialogBody className="grow flex-row">
            <SectionRoot className="flex-1/3 shrink-0">
              <SectionHeader>
                <Heading>{trans("data-table.columns", { fallback: "Columns" })}</Heading>
              </SectionHeader>
              <SectionContent className="grid grid-cols-2 divide-x">
                <div className="flex-1/2 pr-4">
                  {availableColumns.map((column) => {
                    const columnLabel = upperFirst(column.columnDef.header as string);
                    const label = `${trans("ui.show")} '${columnLabel}'`;

                    return (
                      <Tooltip tooltip={label} key={column.id}>
                        <Button
                          aria-label={label}
                          className="w-full justify-start font-normal"
                          variant="outline"
                          onClick={() => handleActivate(column)}
                        >
                          {upperFirst(column.columnDef.header as string)}
                        </Button>
                      </Tooltip>
                    );
                  })}
                </div>
                <div className="flex-1/2 pl-4">
                  <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext
                      items={activeColumns.map((column) => column.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      {activeColumns.map((column) => {
                        return (
                          <SortableItem
                            column={column}
                            onRemove={() => handleDeactivate(column)}
                            key={column.id}
                          />
                        );
                      })}
                    </SortableContext>
                  </DndContext>
                </div>
              </SectionContent>
            </SectionRoot>
          </DialogBody>
          <DialogFooter className="border-t sm:justify-start">
            <Button
              onClick={() => {
                router.post(
                  route("narsil.data-tables.destroy"),
                  {
                    table_name: table.table_name,
                  },
                  {
                    preserveState: false,
                  },
                );
              }}
            >
              {trans("ui.reset", { fallback: "Reset" })}
            </Button>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  );
}

export default DataTableSettings;

type SortableItemProps = {
  column: Column<Data, unknown>;
  onRemove: (c: Column<Data, unknown>) => void;
};

function SortableItem({ column, onRemove }: SortableItemProps) {
  const { trans } = useTranslator();

  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: column.id,
  });

  const columnLabel = upperFirst(column.columnDef.header as string);

  const hideColumnLabel = `${trans("ui.hide")} '${columnLabel}'`;
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
      <Tooltip tooltip={hideColumnLabel}>
        <Button
          className="rounded-full"
          aria-label={hideColumnLabel}
          size="icon-sm"
          variant="ghost"
          onClick={() => onRemove(column)}
        >
          <Icon name="x" />
        </Button>
      </Tooltip>
    </div>
  );
}

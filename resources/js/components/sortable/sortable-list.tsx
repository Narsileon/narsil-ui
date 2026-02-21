import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragCancelEvent,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Button } from "@narsil-ui/components/button";
import { SortableListItem, type SortableData } from "@narsil-ui/components/sortable";
import { useTranslator } from "@narsil-ui/components/translator";
import { isEmpty } from "lodash-es";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type SortableListProps = {
  items: SortableData[];
  labelKey: string;
  setItems: (items: SortableData[]) => void;
  render?: (item: SortableData, index: number) => ReactNode;
};

function SortableList({ items, labelKey, render, setItems }: SortableListProps) {
  if (isEmpty(items)) {
    items = [];
  }

  const { trans } = useTranslator();

  const [active, setActive] = useState<SortableData | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  function onAdd(uuid: string) {
    setItems([...items, { uuid: uuid, [labelKey]: "" }]);
  }

  function onDragCancel({}: DragCancelEvent) {
    setActive(null);
  }

  function onDragEnd({ active, over }: DragEndEvent) {
    if (over) {
      const activeIndex = items.findIndex((item) => {
        return item.uuid === active.id;
      });
      const overIndex = items.findIndex((item) => {
        return item.uuid === over.id;
      });

      if (activeIndex !== overIndex) {
        setItems(arrayMove(items, activeIndex, overIndex));
      }
    }

    setActive(null);
  }

  function onDragStart({ active }: DragStartEvent) {
    const item = items.find((item) => item.uuid === active.id);

    setActive(item as SortableData);
  }

  function onMoveUp(uuid: string) {
    const index = items.findIndex((item) => {
      return item.uuid === uuid;
    });

    if (index > 0) {
      setItems(arrayMove(items, index, index - 1));
    }
  }

  function onMoveDown(uuid: string) {
    const index = items.findIndex((item) => {
      return item.uuid === uuid;
    });

    if (index >= 0 && index < items.length - 1) {
      setItems(arrayMove(items, index, index + 1));
    }
  }

  function onRemove(uuid: string) {
    setItems(
      items.filter((item) => {
        return item.uuid !== uuid;
      }),
    );
  }

  return (
    <div>
      <DndContext
        collisionDetection={closestCenter}
        onDragCancel={onDragCancel}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        sensors={sensors}
      >
        <SortableContext
          items={items.map((item) => item.uuid)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="grid gap-4">
            {items.map((item, index) => {
              return (
                <SortableListItem
                  index={index}
                  item={item}
                  labelKey={labelKey}
                  onMoveDown={index < items.length - 1 ? () => onMoveDown(item.uuid) : undefined}
                  onMoveUp={index !== 0 ? () => onMoveUp(item.uuid) : undefined}
                  onRemove={() => onRemove(item.uuid)}
                  key={item.uuid}
                >
                  {render?.(item, index)}
                </SortableListItem>
              );
            })}
          </ul>
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {active ? (
              <SortableListItem item={active} labelKey={labelKey}>
                {render?.(active, 0)}
              </SortableListItem>
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
      <Button
        className="mt-4"
        onClick={() => {
          onAdd(crypto.randomUUID());
        }}
      >
        {trans("ui.add")}
      </Button>
    </div>
  );
}

export default SortableList;

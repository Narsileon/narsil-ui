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
import { useFormField } from "@narsil-ui/components/form";
import { getField, type Registry } from "@narsil-ui/components/form/inputs";
import { Label } from "@narsil-ui/components/label";
import { SortableTableItem, type SortableData } from "@narsil-ui/components/sortable";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  TableWrapper,
} from "@narsil-ui/components/table";
import { useTranslator } from "@narsil-ui/components/translator";
import type { FieldData } from "@narsil-ui/types";
import { get, isEmpty, set, upperFirst } from "lodash-es";
import { useState } from "react";
import { createPortal } from "react-dom";

type SortableTableProps = {
  columns: FieldData[];
  registry: Registry;
  rows: SortableData[];
  setRows: (rows: SortableData[]) => void;
};

function SortableTable({ columns, registry, rows, setRows }: SortableTableProps) {
  if (isEmpty(rows)) {
    rows = [];
  }

  const { trans } = useTranslator();

  const { fieldLanguage } = useFormField();

  const [active, setActive] = useState<SortableData | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  );

  function onAdd(uuid: string) {
    setRows([...rows, { uuid: uuid }]);
  }

  function onDragCancel({}: DragCancelEvent) {
    setActive(null);
  }

  function onDragEnd({ active, over }: DragEndEvent) {
    if (over) {
      const activeIndex = rows.findIndex((row) => row.uuid === active.id);
      const overIndex = rows.findIndex((row) => row.uuid === over.id);

      if (activeIndex !== overIndex) {
        setRows(arrayMove(rows, activeIndex, overIndex));
      }
    }

    setActive(null);
  }

  function onDragStart({ active }: DragStartEvent) {
    const row = rows.find((row) => row.uuid === active.id);

    setActive(row as SortableData);
  }

  function onMoveUp(uuid: string) {
    const index = rows.findIndex((row) => {
      return row.uuid === uuid;
    });

    if (index > 0) {
      setRows(arrayMove(rows, index, index - 1));
    }
  }

  function onMoveDown(uuid: string) {
    const index = rows.findIndex((row) => {
      return row.uuid === uuid;
    });

    if (index >= 0 && index < rows.length - 1) {
      setRows(arrayMove(rows, index, index + 1));
    }
  }

  function onRemove(uuid: string) {
    setRows(
      rows.filter((row) => {
        return row.uuid !== uuid;
      }),
    );
  }

  function onUpdate(uuid: string, key: string, value: unknown) {
    setRows(
      rows.map((row) => {
        return row.uuid === uuid ? set({ ...row }, key, value) : row;
      }),
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragCancel={onDragCancel}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <SortableContext items={rows.map((row) => row.uuid)} strategy={verticalListSortingStrategy}>
        <TableWrapper>
          <TableRoot className="w-full table-fixed">
            <TableHeader>
              <TableRow className="bg-accent">
                <TableHead className="w-9" />
                {columns.map((column, index) => {
                  return (
                    <TableHead className="px-3" key={index}>
                      <Label required={column.required}>{upperFirst(column.label)}</Label>
                    </TableHead>
                  );
                })}
                <TableHead className="w-9" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <SortableTableItem
                    className="h-11"
                    id={row.uuid}
                    onMoveUp={index > 0 ? () => onMoveUp(row.uuid) : undefined}
                    onMoveDown={index < rows.length - 1 ? () => onMoveDown(row.uuid) : undefined}
                    onRemove={() => onRemove(row.uuid)}
                    key={row.uuid}
                  >
                    {columns.map((column, index) => {
                      const columnId = column.translatable
                        ? `${column.id}.${fieldLanguage}`
                        : column.id;

                      const value = get(row, columnId, column.input.defaultValue);

                      return (
                        <TableCell className="px-0.5 py-0" key={index}>
                          {getField(registry, column.input.type, {
                            input: column.input,
                            id: columnId,
                            required: column.required,
                            value: value,
                            setValue: (value) => {
                              onUpdate(row.uuid, columnId, value);
                            },
                          })}
                        </TableCell>
                      );
                    })}
                  </SortableTableItem>
                );
              })}
              <SortableTableItem
                id={"placeholder"}
                colSpan={columns.length}
                disabled={true}
                placeholder={true}
                onClick={() => {
                  onAdd(crypto.randomUUID());
                }}
              >
                {trans("ui.add")}
              </SortableTableItem>
            </TableBody>
            {createPortal(
              <DragOverlay>
                {active ? (
                  <TableRoot>
                    <SortableTableItem id={active.uuid} className="h-11">
                      {columns.map((_, index) => {
                        return <TableCell key={index} />;
                      })}
                    </SortableTableItem>
                  </TableRoot>
                ) : null}
              </DragOverlay>,
              document.body,
            )}
          </TableRoot>
        </TableWrapper>
      </SortableContext>
    </DndContext>
  );
}

export default SortableTable;

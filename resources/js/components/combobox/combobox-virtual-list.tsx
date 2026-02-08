import { useRender } from "@base-ui/react";
import { ComboboxItem, ComboboxVirtualItem } from "@narsil-ui/components/combobox";
import { cn } from "@narsil-ui/lib/utils";
import type { OptionData } from "@narsil-ui/types";
import { type ReactVirtualizerOptions, useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useRef } from "react";

type ComboboxVirtualListProps = Partial<ReactVirtualizerOptions<HTMLDivElement, Element>> & {
  className?: string;
  filteredItems: (OptionData | string)[];
  render: useRender.ComponentProps<typeof ComboboxItem>["render"];
};

function ComboboxVirtualList({
  className,
  count,
  enabled,
  filteredItems = [],
  overscan = 20,
  paddingEnd = 6,
  paddingStart = 6,
  render,
  scrollPaddingEnd = 6,
  scrollPaddingStart = 6,
  estimateSize = () => 32,
}: ComboboxVirtualListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: count ?? filteredItems.length,
    enabled: enabled,
    overscan: overscan,
    paddingEnd: paddingEnd,
    paddingStart: paddingStart,
    scrollPaddingEnd: scrollPaddingEnd,
    scrollPaddingStart: scrollPaddingStart,
    estimateSize: estimateSize,
    getScrollElement: () => ref.current,
  });

  const handleScrollElementRef = useCallback(
    (element: HTMLDivElement | null) => {
      ref.current = element;

      if (!element) {
        return;
      }

      virtualizer.measure();
    },
    [virtualizer],
  );

  const totalSize = virtualizer.getTotalSize();

  return (
    <div
      ref={handleScrollElementRef}
      role="presentation"
      className={cn(
        "h-[inherit] max-h-[inherit] scroll-p-2 overflow-auto overscroll-contain",
        className,
      )}
      style={{ "--total-size": `${totalSize}px` } as React.CSSProperties}
    >
      <div role="presentation" className="relative w-full" style={{ height: totalSize }}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = filteredItems[virtualItem.index];

          if (!item) {
            return null;
          }

          return (
            <ComboboxVirtualItem
              ref={virtualizer.measureElement}
              data-index={virtualItem.index}
              className="absolute top-0 left-0 w-full"
              aria-setsize={filteredItems.length}
              aria-posinset={virtualItem.index + 1}
              index={virtualItem.index}
              item={item}
              render={render}
              style={{
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              }}
              key={virtualItem.key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ComboboxVirtualList;

import { Button } from "@narsil-ui/components/button";
import { cn } from "@narsil-ui/lib/utils";
import { useState, type ComponentProps } from "react";

type WidthSelectorProps = Omit<ComponentProps<"div">, "defaultValue"> & {
  defaultValue?: number;
  options?: number[];
  value: number;
  onValueChange: (value: number) => void;
};

function WidthSelector({
  className,
  defaultValue = 100,
  options = [25, 33, 50, 67, 75, 100],
  value,
  onValueChange,
  ...props
}: WidthSelectorProps) {
  const [width, setWidth] = useState(value ?? defaultValue);

  return (
    <div
      className={cn("relative", className)}
      onMouseLeave={() => setWidth(value ?? defaultValue)}
      {...props}
    >
      <ul className="flex h-6 flex-row divide-x divide-input overflow-hidden rounded-md border">
        {options.map((option, index) => {
          return (
            <li key={index}>
              <Button
                className={cn(
                  "w-2.5 rounded-none border-none p-0",
                  width >= option && "bg-accent text-accent-foreground",
                )}
                variant="outline"
                onClick={() => onValueChange(option)}
                onMouseEnter={() => setWidth(option)}
              />
            </li>
          );
        })}
      </ul>
      <span className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-accent-foreground">
        {`${width}%`}
      </span>
    </div>
  );
}

export default WidthSelector;

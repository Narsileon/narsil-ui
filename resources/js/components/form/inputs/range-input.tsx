import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "@narsil-ui/components/slider";
import { useMemo } from "react";
import { FieldProps } from ".";

function RangeInput({ id, input, value, setValue }: FieldProps) {
  const { defaultValue = 0, min = 0, max = 100, ...props } = input;

  const computedValue = useMemo(() => {
    return Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max];
  }, [value, defaultValue, min, max]);

  return (
    <SliderRoot
      {...props}
      id={id}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={setValue}
    >
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        {Array.from({ length: computedValue.length }, (_, index) => {
          return <SliderThumb key={index} />;
        })}
      </SliderControl>
    </SliderRoot>
  );
}

export default RangeInput;

import { CalendarRoot } from "@narsil-ui/components/calendar";
import { type ComponentProps } from "react";

function Calendar({ ...props }: ComponentProps<typeof CalendarRoot>) {
  return <CalendarRoot {...props} />;
}

export default Calendar;

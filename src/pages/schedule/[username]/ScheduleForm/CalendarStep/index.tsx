import { useState } from "react";
import { Calendar } from "../../../../../components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useGetUserAvailability } from "../../../../../hooks/availability/useGetUserAvailability";

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const router = useRouter();

  const username = String(router.query.username);

  const isDateSelected = !!selectedDate;

  const weekDay = isDateSelected ? dayjs(selectedDate).format("dddd") : null;
  const describedDate = isDateSelected
    ? dayjs(selectedDate).format("DD[ de ]MMMM")
    : null;

  const selectedDateWithoutTime = isDateSelected
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  const { data: availability } = useGetUserAvailability({
    selectedDateWithoutTime,
    username,
  });

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selecteDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            {availability?.possibleTimes.map((hour) => {
              return (
                <TimePickerItem
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, "0")}:00h
                </TimePickerItem>
              );
            })}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}

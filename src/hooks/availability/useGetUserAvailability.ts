import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface GetUserAvailabilityProps {
  username: string;
  selectedDateWithoutTime: string | null;
}

export interface Availability {
  possibleTimes: number[];
  availableTimes: number[];
}

export function useGetUserAvailability({
  username,
  selectedDateWithoutTime,
}: GetUserAvailabilityProps) {
  const userAvailability = useQuery({
    queryKey: ["AVAILABILITY", selectedDateWithoutTime],
    queryFn: async () => {
      const response = await api.get<Availability>(
        `/users/${username}/availability`,
        {
          params: {
            date: selectedDateWithoutTime,
          },
        }
      );

      return response.data;
    },
    enabled: !!selectedDateWithoutTime,
  });

  return userAvailability;
}

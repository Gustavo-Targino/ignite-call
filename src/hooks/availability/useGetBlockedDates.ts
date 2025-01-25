import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface GetBlockedDatesProps {
  username: string;
  year: number;
  month: number;
}

interface BlockedDatesResponse {
  blockedWeekDays: number[];
  blockedDates: number[];
}

export function useGetBlockedDates({
  username,
  year,
  month,
}: GetBlockedDatesProps) {
  const blockedDates = useQuery({
    queryKey: ["BLOCKED_DATES", year, month],
    queryFn: async () => {
      const response = await api.get<BlockedDatesResponse>(
        `/users/${username}/blocked-dates`,
        {
          params: {
            year,
            month: month + 1,
          },
        }
      );

      return response.data;
    },
  });

  return blockedDates;
}

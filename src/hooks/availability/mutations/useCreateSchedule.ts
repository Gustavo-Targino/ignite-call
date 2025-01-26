import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/axios";

interface CreateScheduleProps {
  date: Date;
  username: string;
  name: string;
  email: string;
  observations: string | null;
}

export function useCreateSchedule() {
  const createSchedule = useMutation({
    mutationFn: async ({
      username,
      date,
      email,
      name,
      observations,
    }: CreateScheduleProps) => {
      await api.post(`/users/${username}/schedule`, {
        date,
        email,
        name,
        observations,
      });
    },
    onSuccess: () => {},
    onError: () => {},
  });

  return createSchedule;
}

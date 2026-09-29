"use client";

import { useQuery } from "@tanstack/react-query";

import { getMealById } from "@/lib/api/meals";
import { mealKeys } from "@/lib/api/queryKeys";

export function useMeal(id: string) {
  return useQuery({
    queryKey: mealKeys.detail(id),
    queryFn: () => getMealById(id),
    enabled: Boolean(id),
  });
}

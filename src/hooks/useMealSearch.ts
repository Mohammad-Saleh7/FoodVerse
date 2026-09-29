"use client";

import { useQuery } from "@tanstack/react-query";

import { searchMeals } from "@/lib/api/meals";
import { mealKeys } from "@/lib/api/queryKeys";

export function useMealSearch(query: string) {
  return useQuery({
    queryKey: mealKeys.search(query),
    queryFn: () => searchMeals(query),
    enabled: Boolean(query.trim()),
  });
}

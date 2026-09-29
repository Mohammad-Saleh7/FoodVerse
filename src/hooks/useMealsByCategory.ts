"use client";

import { useQuery } from "@tanstack/react-query";

import { getMealsByCategory } from "@/lib/api/meals";
import { mealKeys } from "@/lib/api/queryKeys";

export function useMealsByCategory(category: string) {
  return useQuery({
    queryKey: mealKeys.category(category),
    queryFn: () => getMealsByCategory(category),
    enabled: Boolean(category.trim()),
  });
}

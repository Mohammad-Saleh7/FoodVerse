export const mealKeys = {
  all: ["meals"] as const,

  lists: () => [...mealKeys.all, "list"] as const,

  search: (query: string) => [...mealKeys.lists(), "search", query] as const,

  category: (category: string) =>
    [...mealKeys.lists(), "category", category] as const,

  detail: (id: string) => [...mealKeys.all, "detail", id] as const,
};

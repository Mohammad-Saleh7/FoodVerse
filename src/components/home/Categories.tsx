"use client";

import { useCategories } from "@/hooks/useCategories";

export default function Categories() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>Failed to load categories.</p>;
  }

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Categories</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {categories?.map((category) => (
          <div key={category.idCategory}>
            <p>{category.strCategory}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

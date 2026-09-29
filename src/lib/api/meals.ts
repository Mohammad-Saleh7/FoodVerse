const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealResponse {
  meals: Meal[] | null;
}

export interface MealSummaryResponse {
  meals: MealSummary[] | null;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryResponse {
  categories: Category[] | null;
}

// Get a single meal by ID
export async function getMealById(id: string): Promise<Meal | null> {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch meal");
  }

  const data: MealResponse = await response.json();

  return data.meals?.[0] ?? null;
}

// Search meals by name
export async function searchMeals(query: string): Promise<Meal[]> {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search meals");
  }

  const data: MealResponse = await response.json();

  return data.meals ?? [];
}

// Get meals by category
export async function getMealsByCategory(
  category: string,
): Promise<MealSummary[]> {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals by category");
  }

  const data: MealSummaryResponse = await response.json();

  return data.meals ?? [];
}

// Get all meal categories
export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories.php`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: CategoryResponse = await response.json();

  return data.categories ?? [];
}

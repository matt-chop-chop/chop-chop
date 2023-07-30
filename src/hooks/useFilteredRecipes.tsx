import { useFilterByArea } from "@/hooks";
import { useFilterByCategory } from "./useFilterByCategory";
import { useFilterByIngredient } from "./useFilterByIngredient";
import { filterRecipes } from "./utils";

type FilterQueryState = {
  recipes: string[];
  error?: Error;
  loading: boolean;
};

export const useFilteredRecipes = (
  area: string,
  category: string,
  ingredient: string
): FilterQueryState => {
  const {
    recipes: recipesByArea,
    loading: loadingArea,
    error: errorArea,
  } = useFilterByArea(area);
  const {
    recipes: recipesByCategory,
    loading: loadingCategory,
    error: errorCategory,
  } = useFilterByCategory(category);
  const {
    recipes: recipesByIngredient,
    loading: loadingIngredient,
    error: errorIngredient,
  } = useFilterByIngredient(ingredient);

  const loading = loadingArea || loadingCategory || loadingIngredient;

  if (errorArea || errorCategory || errorIngredient)
    return {
      recipes: [],
      loading,
      error: new Error("Recipe selection could not be found."),
    };

  if (!loading) {
    const recipes = filterRecipes(
      recipesByArea,
      recipesByCategory,
      recipesByIngredient
    );

    return { recipes, loading };
  }

  return {
    recipes: [],
    loading,
  };
};

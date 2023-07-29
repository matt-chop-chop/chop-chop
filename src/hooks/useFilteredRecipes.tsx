import { useQuery } from "react-query";
import axios from "axios";
import {
  convertApiRecipeToRecipe,
  convertApiRecipesToRecipes,
  getReactQueryError,
} from "./utils";
import { apiUrl } from "@/constants";
import { useFilterByArea } from "./useFilterByArea";
import { useFilterByCategory } from "./useFilterByCategory";
import { useFilterByIngredient } from "./useFilterByIngredient";

const updateRecipes = (
  recipesByArea: string[],
  recipesByCategory: string[],
  recipesByIngredient: string[]
): string[] => {
  console.log(recipesByIngredient);
  console.log(recipesByCategory);
  console.log(recipesByArea);
  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    return [];
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    return recipesByArea;
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length === 0
  ) {
    return recipesByCategory;
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length > 0
  ) {
    return recipesByIngredient;
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    return recipesByArea;
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length === 0
  ) {
    return recipesByArea.filter((x) => recipesByCategory.includes(x));
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length > 0
  ) {
    return recipesByArea.filter((x) => recipesByIngredient.includes(x));
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length > 0
  ) {
    return recipesByCategory.filter((x) => recipesByIngredient.includes(x));
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length > 0
  ) {
    const recipesByAreaAndCategory = recipesByArea.filter((x) =>
      recipesByCategory.includes(x)
    );
    return recipesByAreaAndCategory.filter((x) =>
      recipesByIngredient.includes(x)
    );
  }

  return [];
};

export const useFilteredRecipes = (
  area: string,
  category: string,
  ingredient: string
): string[] => {
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

  const recipes = updateRecipes(
    recipesByArea,
    recipesByCategory,
    recipesByIngredient
  );

  return recipes;
};

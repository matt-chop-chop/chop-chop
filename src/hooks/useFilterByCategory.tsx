import { useQuery } from "react-query";
import axios from "axios";
import {
  convertApiRecipeToRecipe,
  convertApiRecipesToRecipes,
  getReactQueryError,
} from "./utils";
import { apiUrl } from "@/constants";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";

type ApiQueryState = {
  data?: ApiMeal;
  error: unknown;
  isLoading: boolean;
  isSuccess: boolean;
};

type RecipeQueryState = {
  recipes: Recipe[];
  error?: Error;
  loading: boolean;
};

export const useFilterByCategory = (category: string): RecipeQueryState => {
  const response: ApiQueryState = useQuery(
    [`filter-category-${category}`],
    async () => {
      return await axios.get(`${apiUrl}/filter.php?c=${category}`);
    }
  );

  const { data, isLoading: loading, error, isSuccess } = response;

  if (category === "None") return { recipes: [], loading: false };

  if (isSuccess && data?.data?.meals) {
    const recipes = data ? convertApiRecipesToRecipes(data.data.meals) : [];
    return { recipes, loading, error: getReactQueryError(error) };
  }

  if (isSuccess && !data?.data?.meals) {
    return {
      recipes: [],
      loading,
      error: new Error(
        "The provided category could not be found in any of our recipes."
      ),
    };
  }

  return { recipes: [], loading, error: getReactQueryError(error) };
};

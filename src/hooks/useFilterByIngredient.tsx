import { useQuery } from "react-query";
import axios from "axios";
import { getReactQueryError } from "./utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiFilteredMeal;
  error: unknown;
  isLoading: boolean;
  isSuccess: boolean;
};

type FilterQueryState = {
  recipes: string[];
  error?: Error;
  loading: boolean;
};

export const useFilterByIngredient = (ingredient: string): FilterQueryState => {
  const response: ApiQueryState = useQuery(
    [`filter-ingredient-${ingredient}`],
    async () => {
      return await axios.get(`${apiUrl}/filter.php?i=${ingredient}`);
    }
  );

  const { data, isLoading: loading, error, isSuccess } = response;

  if (ingredient === "None") return { recipes: [], loading: false };

  if (isSuccess && data && data?.data?.meals) {
    return {
      recipes: data.data.meals.map((recipe) => (recipe ? recipe.idMeal : "")),
      loading,
      error: getReactQueryError(error),
    };
  }

  if (isSuccess && !data?.data?.meals) {
    return {
      recipes: [],
      loading,
      error: new Error(
        "The provided ingredient could not be found in any of our recipes."
      ),
    };
  }

  return { recipes: [], loading, error: getReactQueryError(error) };
};

import { useQuery } from "react-query";
import axios from "axios";
import { convertApiRecipeToRecipe, getReactQueryError } from "./utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiMeal;
  error: unknown;
  isLoading: boolean;
  isSuccess: boolean;
};

type RandomRecipeQueryState = {
  recipe: Recipe | null;
  error?: Error;
  loading: boolean;
};

export const useRandomRecipe = (key: number): RandomRecipeQueryState => {
  const response: ApiQueryState = useQuery(
    [`random-recipe-${key}`],
    async () => {
      return await axios.get(`${apiUrl}/random.php`);
    }
  );

  const { data, isLoading: loading, error, isSuccess } = response;

  const recipe = data ? convertApiRecipeToRecipe(data.data.meals[0]) : null;

  return { recipe, loading, error: getReactQueryError(error) };
};

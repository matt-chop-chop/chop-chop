import { useQuery } from "react-query";
import axios from "axios";
import { convertApiRecipeToRecipe, getReactQueryError } from "./utils";
import { apiUrl } from "@/constants";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";

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

export const useRecipe = (): RandomRecipeQueryState => {
  const router = useRouter();
  const id = router.query["id"];

  const response: ApiQueryState = useQuery([`recipe-${id}`], async () => {
    return await axios.get(`${apiUrl}/lookup.php?i=${id}`);
  });

  const { data, isLoading: loading, error, isSuccess } = response;

  if (isSuccess && data?.data?.meals) {
    const recipe = data ? convertApiRecipeToRecipe(data.data.meals[0]) : null;
    return { recipe, loading, error: getReactQueryError(error) };
  }

  if (isSuccess && !data?.data?.meals) {
    return {
      recipe: null,
      loading,
      error: new Error(
        "The provided recipe ID did not match any of our recipes."
      ),
    };
  }

  return { recipe: null, loading, error: getReactQueryError(error) };
};

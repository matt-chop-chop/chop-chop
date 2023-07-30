import { useQuery } from "react-query";
import axios from "axios";
import {
  convertApiIngredientsToIngredients,
  getReactQueryError,
} from "./utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiIngredients;
  error: unknown;
  isLoading: boolean;
};

type IngredientQueryState = {
  ingredients: Ingredient[];
  error?: Error;
  loading: boolean;
};

export const useIngredients = (): IngredientQueryState => {
  const response: ApiQueryState = useQuery([`ingredients`], async () => {
    return await axios.get(`${apiUrl}/list.php?i=list`);
  });

  const { data, isLoading: loading, error } = response;

  const ingredients =
    data && data?.data?.meals
      ? convertApiIngredientsToIngredients(data.data?.meals)
      : [];
  ingredients.unshift({ name: "None", description: "" });

  return { ingredients, loading, error: getReactQueryError(error) };
};

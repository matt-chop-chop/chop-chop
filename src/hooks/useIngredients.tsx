import { useQuery } from "react-query";
import axios from "axios";
import {
  convertApiAreasToAreas,
  convertApiCategoriesToCategories,
  convertApiIngredientsToIngredients,
  getReactQueryError,
} from "./utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiIngredients;
  error: unknown;
  isLoading: boolean;
};

type AreaQueryState = {
  ingredients: SelectableIngredient[];
  error?: Error;
  loading: boolean;
};

export const useIngredients = (): AreaQueryState => {
  const response: ApiQueryState = useQuery([`ingredients`], async () => {
    return await axios.get(`${apiUrl}/list.php?i=list`);
  });

  const { data, isLoading: loading, error } = response;
  const ingredients = data
    ? convertApiIngredientsToIngredients(data.data?.meals)
    : [];

  return { ingredients, loading, error: getReactQueryError(error) };
};

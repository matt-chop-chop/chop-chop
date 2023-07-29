import { useQuery } from "react-query";
import axios from "axios";
import { convertApiCategoriesToCategories, getReactQueryError } from "./utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiCategories;
  error: unknown;
  isLoading: boolean;
};

type CategoryQueryState = {
  categories: string[];
  error?: Error;
  loading: boolean;
};

export const useCategories = (): CategoryQueryState => {
  const response: ApiQueryState = useQuery([`categories`], async () => {
    return await axios.get(`${apiUrl}/list.php?c=list`);
  });

  const { data, isLoading: loading, error } = response;
  const categories = data
    ? convertApiCategoriesToCategories(data.data?.meals)
    : [];

  return { categories, loading, error: getReactQueryError(error) };
};

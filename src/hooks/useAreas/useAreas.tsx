import { useQuery } from "react-query";
import axios from "axios";
import { convertApiAreasToAreas, getReactQueryError } from "../utils";
import { apiUrl } from "@/constants";

type ApiQueryState = {
  data?: ApiAreas;
  error: unknown;
  isLoading: boolean;
};

type AreaQueryState = {
  areas: Area[];
  error?: Error;
  loading: boolean;
};

export const useAreas = (): AreaQueryState => {
  const response: ApiQueryState = useQuery([`areas`], async () => {
    return await axios.get(`${apiUrl}/list.php?a=list`);
  });

  const { data, isLoading: loading, error } = response;

  const areas =
    data && data?.data?.meals ? convertApiAreasToAreas(data.data?.meals) : [];

  areas.unshift({ name: "None" });

  return { areas, loading, error: getReactQueryError(error) };
};

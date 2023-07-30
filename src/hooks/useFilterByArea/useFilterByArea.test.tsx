import { apiRecipe as mockApiRecipe } from "@/data";
import { useFilterByArea } from "./useFilterByArea";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilterByArea", () => {
  it("is exported from useFilterByArea", () => {
    expect(useFilterByArea).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useFilterByArea("French");

    expect(response).toEqual({
      recipes: ["52922"],
      loading: false,
      error: undefined,
    });
  });
});

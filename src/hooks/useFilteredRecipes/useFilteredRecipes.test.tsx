import { apiRecipe as mockApiRecipe, recipe } from "@/data";
import { useFilteredRecipes } from "./useFilteredRecipes";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilteredRecipes", () => {
  it("is exported from useFilteredRecipes", () => {
    expect(useFilteredRecipes).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useFilteredRecipes("French", "Side", "Tiger Prawns");

    expect(response).toEqual({
      recipes: ["52922"],
      loading: false,
      error: undefined,
    });
  });
});

import { useFilteredRecipes } from "./useFilteredRecipes";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilterByIngredient", () => {
  it("is exported from useFilterByIngredient", () => {
    expect(useFilteredRecipes).toBeDefined();
  });

  it("returns expected object from react query response when no matching recipes are returned", () => {
    const response = useFilteredRecipes("French", "Side", "Tiger Prawns");

    expect(response).toEqual({
      recipes: [],
      loading: false,
      error: new Error("Recipe selection could not be found."),
    });
  });
});

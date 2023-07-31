import { useFilteredRecipes } from "./useFilteredRecipes";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: true,
    isSuccess: false,
  }),
}));

describe("useFilteredRecipes", () => {
  it("is exported from useFilteredRecipes", () => {
    expect(useFilteredRecipes).toBeDefined();
  });

  it("returns expected object from react query response when loading", () => {
    const response = useFilteredRecipes("French", "Side", "Tiger Prawns");

    expect(response).toEqual({
      recipes: [],
      loading: true,
    });
  });
});

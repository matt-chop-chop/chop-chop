import { apiRecipe as mockApiRecipe } from "@/data";
import { useFilterByIngredient } from "./useFilterByIngredient";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilterByIngredient", () => {
  it("is exported from useFilterByIngredient", () => {
    expect(useFilterByIngredient).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useFilterByIngredient("Tiger Prawns");

    expect(response).toEqual({
      recipes: ["52922"],
      loading: false,
      error: undefined,
    });
  });
});

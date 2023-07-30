import { apiRecipe as mockApiRecipe, recipe } from "@/data";
import { useRandomRecipe } from "./useRandomRecipe";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
  }),
}));

describe("useRandomRecipe", () => {
  it("is exported from useRandomRecipe", () => {
    expect(useRandomRecipe).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useRandomRecipe(0);

    expect(response).toEqual({
      recipe: recipe,
      loading: false,
      error: undefined,
    });
  });
});

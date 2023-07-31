import { apiRecipe as mockApiRecipe } from "@/data";
import { useFilterByCategory } from "./useFilterByCategory";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilterByCategory", () => {
  it("is exported from useFilterByCategory", () => {
    expect(useFilterByCategory).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useFilterByCategory("Side");

    expect(response).toEqual({
      recipes: ["52922"],
      loading: false,
      error: undefined,
    });
  });
});

import { apiRecipe as mockApiRecipe, recipe } from "@/data";
import { useRecipe } from "./useRecipe";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({ pathname: "/", query: { id: "123" } }),
}));

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [mockApiRecipe] },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useRecipe", () => {
  it("is exported from useRecipe", () => {
    expect(useRecipe).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useRecipe();

    expect(response).toEqual({
      recipe: recipe,
      loading: false,
      error: undefined,
    });
  });
});

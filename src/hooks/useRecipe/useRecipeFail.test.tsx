import { useRecipe } from "./useRecipe";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({ pathname: "/", query: { id: "123" } }),
}));

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: false,
    isSuccess: false,
  }),
}));

describe("useRecipe", () => {
  it("is exported from useRecipe", () => {
    expect(useRecipe).toBeDefined();
  });

  it("returns expected object from react query response when isSuccess is false", () => {
    const response = useRecipe();

    expect(response).toEqual({
      recipe: null,
      loading: false,
    });
  });
});

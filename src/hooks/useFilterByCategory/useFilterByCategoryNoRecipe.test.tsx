import { useFilterByCategory } from "./useFilterByCategory";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: false,
    isSuccess: true,
  }),
}));

describe("useFilterByCategory", () => {
  it("is exported from useFilterByCategory", () => {
    expect(useFilterByCategory).toBeDefined();
  });

  it("returns expected object from react query response when no matching recipes are returned", () => {
    const response = useFilterByCategory("Side");

    expect(response).toEqual({
      recipes: [],
      loading: false,
      error: new Error(
        "The provided category could not be found in any of our recipes."
      ),
    });
  });
});

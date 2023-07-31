import { useFilterByCategory } from "./useFilterByCategory";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: false,
    isSuccess: false,
  }),
}));

describe("useFilterByCategory", () => {
  it("is exported from useFilterByCategory", () => {
    expect(useFilterByCategory).toBeDefined();
  });

  it("returns expected object from react query response when isSuccess is false", () => {
    const response = useFilterByCategory("Side");

    expect(response).toEqual({
      recipes: [],
      loading: false,
    });
  });
});

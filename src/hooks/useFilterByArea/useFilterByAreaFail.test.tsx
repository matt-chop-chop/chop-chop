import { useFilterByArea } from "./useFilterByArea";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: null },
    },
    isLoading: false,
    isSuccess: false,
  }),
}));

describe("useFilterByArea", () => {
  it("is exported from useFilterByArea", () => {
    expect(useFilterByArea).toBeDefined();
  });

  it("returns expected object from react query response when isSuccess is false", () => {
    const response = useFilterByArea("French");

    expect(response).toEqual({
      recipes: [],
      loading: false,
    });
  });
});

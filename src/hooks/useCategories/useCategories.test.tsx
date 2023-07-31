import { useCategories } from "./useCategories";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: { meals: [{ strCategory: "Test 1" }, { strCategory: "Test 2" }] },
    },
    isLoading: false,
  }),
}));

describe("useCategories", () => {
  it("is exported from useCategories", () => {
    expect(useCategories).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useCategories();

    expect(response).toEqual({
      categories: [{ name: "None" }, { name: "Test 1" }, { name: "Test 2" }],
      loading: false,
      error: undefined,
    });
  });
});

import { useIngredients } from "./useIngredients";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: {
        meals: [
          { strIngredient: "Test 1", strDescription: "Test description" },
          { strIngredient: "Test 2", strDescription: "Test description" },
        ],
      },
    },
    isLoading: false,
  }),
}));

describe("useIngredients", () => {
  it("is exported from useIngredients", () => {
    expect(useIngredients).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useIngredients();

    expect(response).toEqual({
      ingredients: [
        { name: "None", description: "" },
        { name: "Test 1", description: "Test description" },
        { name: "Test 2", description: "Test description" },
      ],
      loading: false,
      error: undefined,
    });
  });
});

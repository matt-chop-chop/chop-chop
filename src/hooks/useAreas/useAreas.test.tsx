import { useAreas } from "./useAreas";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: { data: { meals: [{ strArea: "Test 1" }, { strArea: "Test 2" }] } },
    isLoading: false,
  }),
}));

describe("useAreas", () => {
  it("is exported from useAreas", () => {
    expect(useAreas).toBeDefined();
  });

  it("returns expected object from react query response", () => {
    const response = useAreas();

    expect(response).toEqual({
      areas: [{ name: "None" }, { name: "Test 1" }, { name: "Test 2" }],
      loading: false,
      error: undefined,
    });
  });
});

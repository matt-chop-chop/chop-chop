import { shallow } from "enzyme";
import React from "react";
import { apiRecipe as mockApiRecipe } from "@/data";
import Recipe from "../recipe/[id].page";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({ query: { id: "123" } }),
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

describe("Recipe", () => {
  it("is exported from Recipe", () => {
    expect(Recipe).toBeDefined();
  });

  it("renders as expected", () => {
    const wrapper = shallow(<Recipe />);

    expect(wrapper).toMatchSnapshot();
  });
});

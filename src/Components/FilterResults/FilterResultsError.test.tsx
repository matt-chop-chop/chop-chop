import { shallow } from "enzyme";
import React from "react";
import FilterResults from "./FilterResults";
import { recipe as mockRecipe } from "@/data";

jest.mock("@/hooks/useFilteredRecipes", () => ({
  __esModule: true,
  useFilteredRecipes: () => ({
    recipes: [],
    loading: false,
    error: new Error("There has been an error"),
  }),
}));

const props = {
  area: mockRecipe.area,
  category: mockRecipe.category,
  ingredient: mockRecipe.ingredients[0].name,
};

describe("FilterResults", () => {
  it("is exported from FilterResults", () => {
    expect(FilterResults).toBeDefined();
  });

  it("renders as expected when an error is returned", () => {
    const wrapper = shallow(<FilterResults {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import React from "react";
import RandomRecipeListing from "./RandomRecipeListing";
import { recipe as mockRecipe } from "@/data";

jest.mock("@/hooks/useRandomRecipe", () => ({
  __esModule: true,
  useRandomRecipe: () => ({ recipe: mockRecipe, loading: false }),
}));

describe("RandomRecipeListing", () => {
  it("is exported from RecipeListing", () => {
    expect(RandomRecipeListing).toBeDefined();
  });

  it("renders as expected when recipe is returned", () => {
    const wrapper = shallow(<RandomRecipeListing />);

    expect(wrapper).toMatchSnapshot();
  });
});

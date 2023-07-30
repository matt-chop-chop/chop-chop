import { shallow } from "enzyme";
import React from "react";
import RandomRecipeListing from "./RandomRecipeListing";

jest.mock("@/hooks/useRandomRecipe", () => ({
  __esModule: true,
  useRandomRecipe: () => ({ recipe: null, loading: true }),
}));

describe("RandomRecipeListing", () => {
  it("is exported from RecipeListing", () => {
    expect(RandomRecipeListing).toBeDefined();
  });

  it("renders as expected when loading", () => {
    const wrapper = shallow(<RandomRecipeListing />);

    expect(wrapper).toMatchSnapshot();
  });
});

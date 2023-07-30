import { shallow } from "enzyme";
import React from "react";
import RandomRecipeListing from "./RandomRecipeListing";

jest.mock("@/hooks/useRandomRecipe", () => ({
  __esModule: true,
  useRandomRecipe: () => ({
    recipe: null,
    loading: false,
    error: new Error("There was an error"),
  }),
}));

describe("RandomRecipeListing", () => {
  it("is exported from RecipeListing", () => {
    expect(RandomRecipeListing).toBeDefined();
  });

  it("renders as expected when error is returned", () => {
    const wrapper = shallow(<RandomRecipeListing />);

    expect(wrapper).toMatchSnapshot();
  });
});

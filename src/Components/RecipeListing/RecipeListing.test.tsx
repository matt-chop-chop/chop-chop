import { shallow } from "enzyme";
import React from "react";
import RecipeListing, { RecipeListingProps } from "./RecipeListing";
import { recipe } from "@/data/recipe";

const props: RecipeListingProps = {
  recipe: recipe,
};

describe("RecipeListing", () => {
  it("is exported from RecipeListing", () => {
    expect(RecipeListing).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<RecipeListing {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

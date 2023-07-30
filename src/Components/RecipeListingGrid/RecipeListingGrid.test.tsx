import { shallow } from "enzyme";
import React from "react";
import RecipeListingGrid, { RecipeListingGridProps } from "./RecipeListingGrid";

const props: RecipeListingGridProps = {
  showRandom: false,
  recipes: ["123", "456", "789"],
};

const propsRandom: RecipeListingGridProps = {
  showRandom: true,
};

describe("RecipeListingGrid", () => {
  it("is exported from RecipeListingGrid", () => {
    expect(RecipeListingGrid).toBeDefined();
  });

  it("renders as expected when showRandom is false", () => {
    const wrapper = shallow(<RecipeListingGrid {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders as expected when showRandom is true", () => {
    const wrapper = shallow(<RecipeListingGrid {...propsRandom} />);

    expect(wrapper).toMatchSnapshot();
  });
});

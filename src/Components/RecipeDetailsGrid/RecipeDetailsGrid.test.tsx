import { shallow } from "enzyme";
import React from "react";
import RecipeDetailsGrid, { RecipeDetailsGridProps } from "./RecipeDetailsGrid";

const props: RecipeDetailsGridProps = {
  area: "Test Area",
  category: "Test Category",
  ingredientCount: 1,
  time: 10,
};

describe("RecipeDetailsGrid", () => {
  it("is exported from RecipeDetailsGrid", () => {
    expect(RecipeDetailsGrid).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(
      <RecipeDetailsGrid
        {...props}
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with default props ", () => {
    const wrapper = shallow(<RecipeDetailsGrid {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

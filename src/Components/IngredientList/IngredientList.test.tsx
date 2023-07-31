import { shallow } from "enzyme";
import React from "react";
import IngredientList, { IngredientListProps } from "./IngredientList";

const props: IngredientListProps = {
  ingredients: [
    { name: "Test Ingredient", measurement: "500g", image: "/test" },
    { name: "Test Ingredient 2", measurement: "500g", image: "/test" },
  ],
};

describe("IngredientList", () => {
  it("is exported from IngredientList", () => {
    expect(IngredientList).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<IngredientList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("returns null if the list of ingredients is empty ", () => {
    const wrapper = shallow(<IngredientList ingredients={[]} />);

    expect(wrapper.type()).toBeNull();
  });
});

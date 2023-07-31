import { shallow } from "enzyme";
import React from "react";
import RecipeImage, { RecipeImageProps } from "./RecipeImage";

const props: RecipeImageProps = {
  image: "/test",
  maxHeight: ["100%"],
  defaultLogoWidth: ["100%"],
};

describe("RecipeImage", () => {
  it("is exported from RecipeImage", () => {
    expect(RecipeImage).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<RecipeImage {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with default props ", () => {
    const wrapper = shallow(<RecipeImage image={props.image} />);

    expect(wrapper).toMatchSnapshot();
  });
});

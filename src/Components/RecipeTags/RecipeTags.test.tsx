import { shallow } from "enzyme";
import React from "react";
import RecipeTags, { RecipeTagsProps } from "./RecipeTags";

const props: RecipeTagsProps = {
  tags: ["Test Tag 1", "Test Tag 2"],
};

describe("RecipeTags", () => {
  it("is exported from RecipeTags", () => {
    expect(RecipeTags).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<RecipeTags {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("does not render empty tags ", () => {
    const wrapper = shallow(<RecipeTags tags={[props.tags[0], ""]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("returns null if the list of tags is empty ", () => {
    const wrapper = shallow(<RecipeTags tags={[]} />);

    expect(wrapper.type()).toBeNull();
  });
});

import { shallow } from "enzyme";
import React from "react";
import Hero, { HeroProps } from "./Hero";

const props: HeroProps = {
  title: "Hero Test Title",
  message: "This is a test",
};

describe("Hero", () => {
  it("is exported from Hero", () => {
    expect(Hero).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Hero {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

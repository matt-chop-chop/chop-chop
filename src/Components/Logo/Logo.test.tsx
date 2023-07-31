import { shallow } from "enzyme";
import React from "react";
import Logo from "./Logo";

describe("Logo", () => {
  it("is exported from Logo", () => {
    expect(Logo).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});

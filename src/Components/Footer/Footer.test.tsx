import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  it("is exported from Footer", () => {
    expect(Footer).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import React from "react";
import NotFound from "../404.page";

describe("NotFound", () => {
  it("is exported from NotFound", () => {
    expect(NotFound).toBeDefined();
  });

  it("renders as expected", () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});

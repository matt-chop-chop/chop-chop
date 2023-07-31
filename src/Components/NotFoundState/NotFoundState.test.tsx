import { shallow } from "enzyme";
import React from "react";
import NotFoundState from "./NotFoundState";

describe("NotFoundState", () => {
  it("is exported from NotFoundState", () => {
    NotFoundState;
  });

  it("renders as expected", () => {
    const wrapper = shallow(<NotFoundState />);

    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import React from "react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  it("is exported from EmptyState", () => {
    expect(EmptyState).toBeDefined();
  });

  it("renders as expected", () => {
    const wrapper = shallow(<EmptyState />);

    expect(wrapper).toMatchSnapshot();
  });
});

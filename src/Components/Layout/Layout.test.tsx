import { shallow } from "enzyme";
import React from "react";
import Layout from "./Layout";

describe("Layout", () => {
  it("is exported from Layout", () => {
    expect(Layout).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(
      <Layout>
        <div>test</div>
      </Layout>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

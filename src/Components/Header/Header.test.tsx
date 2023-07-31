import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({ pathname: "/test" }),
}));

describe("Header", () => {
  it("is exported from Header", () => {
    expect(Header).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});

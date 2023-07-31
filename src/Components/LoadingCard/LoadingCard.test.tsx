import { shallow } from "enzyme";
import React from "react";
import LoadingCard, { LoadingCardProps } from "./LoadingCard";

const props: LoadingCardProps = {
  showBorder: false,
  mt: "10px",
};

describe("LoadingCard", () => {
  it("is exported from LoadingCard", () => {
    expect(LoadingCard).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<LoadingCard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with default props ", () => {
    const wrapper = shallow(<LoadingCard />);

    expect(wrapper).toMatchSnapshot();
  });
});

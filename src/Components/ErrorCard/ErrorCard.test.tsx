import { shallow } from "enzyme";
import React from "react";
import ErrorCard, { ErrorCardProps } from "./ErrorCard";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({ pathname: "/", query: { id: "123" } }),
}));

describe("ErrorCard", () => {
  const props: ErrorCardProps = {
    error: new Error("There has been an error."),
    showBorder: false,
    mt: "12px",
  };

  it("is exported from ErrorCard", () => {
    expect(ErrorCard).toBeDefined();
  });

  it("renders as expected", () => {
    const wrapper = shallow(<ErrorCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with default props", () => {
    const wrapper = shallow(<ErrorCard error={props.error} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a link to page relating to the id in the url if pathname is not /", () => {
    const wrapper = shallow(<ErrorCard error={props.error} />);

    (useRouter as jest.Mock).mockReturnValue({
      pathname: "test",
      query: {
        id: "123",
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});

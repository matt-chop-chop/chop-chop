import { shallow } from "enzyme";
import React from "react";
import Toast, { ToastProps } from "./Toast";

const onClose = jest.fn();

const props: ToastProps = {
  text: "This is a test toast",
  onClose: onClose,
  background: "red",
};

describe("Toast", () => {
  it("is exported from Toast", () => {
    expect(Toast).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Toast {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls onClose when the close button is clicked ", () => {
    const wrapper = shallow(<Toast {...props} />);
    const CloseIcon = wrapper.find("CloseIcon");
    expect(CloseIcon).toHaveLength(1);
    const onClick = CloseIcon.prop("onClick") as () => void;
    onClick();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders with default props ", () => {
    const wrapper = shallow(<Toast text={props.text} />);

    expect(wrapper).toMatchSnapshot();
  });
});

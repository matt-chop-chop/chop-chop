import { shallow } from "enzyme";
import React from "react";
import MethodStep, { MethodStepProps } from "./MethodStep";

const setChecked = jest.fn();

const props: MethodStepProps = {
  step: "This is a test Method Step",
  setChecked: setChecked,
  checked: false,
};

describe("MethodStep", () => {
  it("is exported from MethodStep", () => {
    expect(MethodStep).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<MethodStep {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls setChecked when the Checkbox is clicked", () => {
    const wrapper = shallow(<MethodStep {...props} />);

    const Checkbox = wrapper.find("Checkbox");
    expect(Checkbox).toHaveLength(1);

    Checkbox.simulate("click");

    expect(setChecked).toHaveBeenCalledWith(true);
  });

  it("calls setChecked when the Flex box is clicked", () => {
    setChecked.mockClear();
    const wrapper = shallow(<MethodStep {...props} />);

    const Checkbox = wrapper.find("Flex");

    Checkbox.simulate("click", {
      preventDefault: () => {},
    });

    expect(setChecked).toHaveBeenCalledWith(true);
  });
});

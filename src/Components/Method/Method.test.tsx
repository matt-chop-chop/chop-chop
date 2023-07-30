import { shallow } from "enzyme";
import React from "react";
import Method, { MethodProps } from "./Method";

const props: MethodProps = {
  instructions: ["Test instruction 1", "Test instruction 2"],
};

const useState = jest.spyOn(React, "useState");

describe("Method", () => {
  it("is exported from Method", () => {
    expect(Method).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<Method {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls setState when a MethodStep setChecked is triggered", () => {
    useState.mockClear();

    const setCheckboxes = jest.fn();
    useState.mockReturnValue([[false, false], setCheckboxes]);

    const wrapper = shallow(<Method {...props} />);

    const MethodStep = wrapper.find("MethodStep");
    expect(MethodStep).toHaveLength(2);

    const setChecked = MethodStep.first().prop("setChecked") as (
      checkboxes: boolean
    ) => void;
    setChecked(true);
    expect(setCheckboxes).toHaveBeenCalledWith([true, false]);
  });

  it("returns null if the list of instructions is empty ", () => {
    const wrapper = shallow(<Method instructions={[]} />);

    expect(wrapper.type()).toBeNull();
  });
});

import { shallow } from "enzyme";
import React from "react";
import FilterSelect, { FilterSelectProps, SelectOption } from "./FilterSelect";
import { ActionMeta, SingleValue } from "react-select";

const onSelectChange = jest.fn();

const props: FilterSelectProps = {
  options: [
    { name: "Test 1" },
    { name: "Test 2", description: "This is a test" },
  ],
  onSelectedChange: onSelectChange,
};

describe("FilterSelect", () => {
  it("is exported from FilterSelect", () => {
    expect(FilterSelect).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<FilterSelect {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls onSelectedChange when onChange is triggered ", () => {
    const wrapper = shallow(<FilterSelect {...props} />);

    const Select = wrapper.find("ForwardRef");
    expect(Select).toHaveLength(1);

    Select.simulate("change", { value: "Test 1" });

    expect(onSelectChange).toHaveBeenCalled();
  });
});

import { shallow } from "enzyme";
import React from "react";
import FilterSelectForm, { FilterSelectFormProps } from "./FilterSelectForm";

const setSelection = jest.fn();

const props: FilterSelectFormProps = {
  label: "This is a test",
  id: "test",
  loading: false,
  options: [{ name: "Test 1" }, { name: "Test 2" }],
  setSelection: setSelection,
  errorMessage: "Test Error",
  error: new Error("There has been an error"),
};

describe("FilterSelectForm", () => {
  it("is exported from FilterSelectForm", () => {
    expect(FilterSelectForm).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<FilterSelectForm {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls setSelection when a selection is made", () => {
    const wrapper = shallow(<FilterSelectForm {...props} />);
    const FilterSelect = wrapper.find("FilterSelect");
    expect(FilterSelect).toHaveLength(1);
    const onSelectedChange = FilterSelect.prop("onSelectedChange") as (
      selection: string
    ) => void;
    onSelectedChange("test");
    expect(setSelection).toHaveBeenCalledWith("test");
  });
});

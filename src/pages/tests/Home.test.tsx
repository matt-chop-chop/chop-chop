import { shallow } from "enzyme";
import React from "react";
import Home from "../index.page";

jest.mock("react-query", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: {
        meals: [
          { strIngredient: "Test 1", strDescription: "Test description" },
          { strIngredient: "Test 2", strDescription: "Test description" },
        ],
      },
    },
    isLoading: false,
  }),
}));

const useState = jest.spyOn(React, "useState");

beforeEach(() => {
  useState.mockClear();
});

describe("Home", () => {
  it("is exported from Home", () => {
    expect(Home).toBeDefined();
  });

  it("renders as expected", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls setState when the ingredient FilterSelectForm setSelection is triggered", () => {
    const setFilter = jest.fn();
    useState.mockReturnValue(["None", setFilter]);

    const wrapper = shallow(<Home />);

    const FilterSelectForm = wrapper.find("FilterSelectForm");
    expect(FilterSelectForm).toHaveLength(3);

    const setSelection = FilterSelectForm.first().prop("setSelection") as (
      ingredient: string
    ) => void;
    setSelection("Tiger Prawns");
    expect(setFilter).toHaveBeenCalledWith("Tiger Prawns");
  });

  it("calls setState when the category FilterSelectForm setSelection is triggered", () => {
    const setFilter = jest.fn();
    useState.mockReturnValue(["None", setFilter]);

    const wrapper = shallow(<Home />);

    const FilterSelectForm = wrapper.find("FilterSelectForm");
    expect(FilterSelectForm).toHaveLength(3);

    const setSelection = FilterSelectForm.at(1).prop("setSelection") as (
      category: string
    ) => void;
    setSelection("Side");
    expect(setFilter).toHaveBeenCalledWith("Side");
  });

  it("calls setState when the area FilterSelectForm setSelection is triggered", () => {
    const setFilter = jest.fn();
    useState.mockReturnValue(["None", setFilter]);

    const wrapper = shallow(<Home />);

    const FilterSelectForm = wrapper.find("FilterSelectForm");
    expect(FilterSelectForm).toHaveLength(3);

    const setSelection = FilterSelectForm.last().prop("setSelection") as (
      area: string
    ) => void;
    setSelection("French");
    expect(setFilter).toHaveBeenCalledWith("French");
  });
});

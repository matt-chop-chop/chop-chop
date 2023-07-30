import { shallow } from "enzyme";
import React from "react";
import RecipeListingFromData, {
  RecipeListingFromDataProps,
} from "./RecipeListingFromData";

jest.mock("@/hooks/useRecipe", () => ({
  __esModule: true,
  useRecipe: () => ({
    recipe: null,
    loading: false,
    error: new Error("There was an error"),
  }),
}));

const props: RecipeListingFromDataProps = {
  id: "123",
};

describe("RecipeListingFromData", () => {
  it("is exported from RecipeListingFromData", () => {
    expect(RecipeListingFromData).toBeDefined();
  });

  it("renders as expected when error is returned", () => {
    const wrapper = shallow(<RecipeListingFromData {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

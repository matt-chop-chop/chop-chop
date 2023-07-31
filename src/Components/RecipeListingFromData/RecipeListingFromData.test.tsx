import { shallow } from "enzyme";
import React from "react";
import RecipeListingFromData, {
  RecipeListingFromDataProps,
} from "./RecipeListingFromData";
import { recipe as mockRecipe } from "@/data";

jest.mock("@/hooks/useRecipe", () => ({
  __esModule: true,
  useRecipe: () => ({ recipe: mockRecipe, loading: false }),
}));

const props: RecipeListingFromDataProps = {
  id: "123",
};

describe("RecipeListingFromData", () => {
  it("is exported from RecipeListingFromData", () => {
    expect(RecipeListingFromData).toBeDefined();
  });

  it("renders as expected when recipe is returned", () => {
    const wrapper = shallow(<RecipeListingFromData {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

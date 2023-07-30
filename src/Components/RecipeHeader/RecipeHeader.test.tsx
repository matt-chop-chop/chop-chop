import { shallow } from "enzyme";
import React from "react";
import RecipeHeader, { RecipeHeaderProps } from "./RecipeHeader";
import { download } from "@/utils";
import { recipe } from "@/data/recipe";

jest.mock("@/utils", () => ({
  download: jest.fn(),
}));

const props: RecipeHeaderProps = {
  recipe: recipe,
};

describe("RecipeHeader", () => {
  it("is exported from RecipeHeader", () => {
    expect(RecipeHeader).toBeDefined();
  });

  it("renders as expected ", () => {
    const wrapper = shallow(<RecipeHeader {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls download when the DownloadIcon is clicked ", () => {
    const wrapper = shallow(<RecipeHeader {...props} />);

    const DownloadIcon = wrapper.find("DownloadIcon");
    expect(DownloadIcon).toHaveLength(1);

    DownloadIcon.simulate("click");

    expect(download).toHaveBeenCalledWith(props.recipe);
  });
});

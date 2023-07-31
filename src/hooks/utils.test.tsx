import { apiRecipe, recipe } from "@/data";
import {
  convertApiAreasToAreas,
  convertApiCategoriesToCategories,
  convertApiIngredientsToIngredients,
  convertApiRecipeToRecipe,
  convertApiRecipesToRecipes,
  filterRecipes,
  getHours,
  getMinutes,
  getReactQueryError,
  getSeconds,
  parseCookingTime,
  parseIngredients,
  parseInstructions,
} from "./utils";

describe("getReactQueryError", () => {
  it("is exported from utils", () => {
    expect(getReactQueryError).toBeDefined();
  });

  it("returns undefined when no error is provided", () => {
    const response = getReactQueryError();

    expect(response).toEqual(undefined);
  });

  it("returns the Error when an Error is provided", () => {
    const error = new Error("Test Error");
    const response = getReactQueryError(error);

    expect(response).toEqual(error);
  });

  it("returns an Error when a string is provided", () => {
    const error = "Test Error";
    const response = getReactQueryError(error);

    expect(response).toEqual(new Error(error));
  });

  it("returns an Error with the error converted to a string if the error is not a string or an Error", () => {
    const error = 404;
    const response = getReactQueryError(error);

    expect(response).toEqual(new Error("404"));
  });
});

describe("parseIngredients", () => {
  it("is exported from utils", () => {
    expect(parseIngredients).toBeDefined();
  });

  it("returns the ingredient list in the expected format", () => {
    const response = parseIngredients(apiRecipe);

    expect(response).toEqual(recipe.ingredients);
  });
});

describe("parseInstructions", () => {
  it("is exported from utils", () => {
    expect(parseInstructions).toBeDefined();
  });

  it("returns the instruction list in the expected format", () => {
    const response = parseInstructions(apiRecipe?.strInstructions || "");

    expect(response).toEqual(recipe.instructions);
  });
});

describe("getSeconds", () => {
  it("is exported from utils", () => {
    expect(getSeconds).toBeDefined();
  });

  it("returns the total number of seconds", () => {
    const response = getSeconds("10seconds 1 second 4sec");

    expect(response).toEqual(15);
  });
});

describe("getMinutes", () => {
  it("is exported from utils", () => {
    expect(getMinutes).toBeDefined();
  });

  it("returns the total number of minutes as seconds", () => {
    const response = getMinutes("10minutes 1 minute 4min");

    expect(response).toEqual(900);
  });
});

describe("getHours", () => {
  it("is exported from utils", () => {
    expect(getHours).toBeDefined();
  });

  it("returns the total number of hours as seconds", () => {
    const response = getHours("10hours 1 hour 4hour");

    expect(response).toEqual(54000);
  });
});

describe("parseCookingTime", () => {
  it("is exported from utils", () => {
    expect(parseCookingTime).toBeDefined();
  });

  it("returns the estimated cooking time in minutes", () => {
    const response = parseCookingTime(apiRecipe?.strInstructions || "");

    expect(response).toEqual(75);
  });

  it("returns 45 minutes as an average cooking time if no timing details are found", () => {
    const response = parseCookingTime(
      "Chop the vegetables. Boil the vegetables. Season the vegetables."
    );

    expect(response).toEqual(45);
  });
});

describe("convertApiRecipeToRecipe", () => {
  it("is exported from utils", () => {
    expect(convertApiRecipeToRecipe).toBeDefined();
  });

  it("returns the recipe in the expected format", () => {
    const response = convertApiRecipeToRecipe(apiRecipe);

    expect(response).toEqual(recipe);
  });
});

describe("convertApiRecipesToRecipes", () => {
  it("is exported from utils", () => {
    expect(convertApiRecipesToRecipes).toBeDefined();
  });

  it("returns the recipes as an array in the expected format", () => {
    const response = convertApiRecipesToRecipes([apiRecipe, apiRecipe]);

    expect(response).toEqual([recipe, recipe]);
  });
});

describe("convertApiCategoriesToCategories", () => {
  it("is exported from utils", () => {
    expect(convertApiCategoriesToCategories).toBeDefined();
  });

  it("returns the categories as an array in the expected format", () => {
    const response = convertApiCategoriesToCategories([
      { strCategory: "Test 1" },
      { strCategory: "Test 2" },
    ]);

    expect(response).toEqual([{ name: "Test 1" }, { name: "Test 2" }]);
  });
});

describe("convertApiAreasToAreas", () => {
  it("is exported from utils", () => {
    expect(convertApiAreasToAreas).toBeDefined();
  });

  it("returns the areas as an array in the expected format", () => {
    const response = convertApiAreasToAreas([
      { strArea: "Test 1" },
      { strArea: "Test 2" },
    ]);

    expect(response).toEqual([{ name: "Test 1" }, { name: "Test 2" }]);
  });
});

describe("convertApiIngredientsToIngredients", () => {
  it("is exported from utils", () => {
    expect(convertApiIngredientsToIngredients).toBeDefined();
  });

  it("returns the ingredients as an array in the expected format", () => {
    const response = convertApiIngredientsToIngredients([
      { strIngredient: "Test 1", strDescription: "This is a test" },
      { strIngredient: "Test 2", strDescription: "This is also a test" },
    ]);

    expect(response).toEqual([
      { name: "Test 1", description: "This is a test" },
      { name: "Test 2", description: "This is also a test" },
    ]);
  });
});

describe("filterRecipes", () => {
  it("is exported from utils", () => {
    expect(filterRecipes).toBeDefined();
  });

  it("returns an empty array if all three arrays are empty", () => {
    const response = filterRecipes([], [], []);

    expect(response).toEqual([]);
  });

  it("returns the recipesByArea array if it is the only non-empty array", () => {
    const response = filterRecipes(["123"], [], []);

    expect(response).toEqual(["123"]);
  });

  it("returns the recipesByCategory array if it is the only non-empty array", () => {
    const response = filterRecipes([], ["123"], []);

    expect(response).toEqual(["123"]);
  });

  it("returns the recipesByIngredient array if it is the only non-empty array", () => {
    const response = filterRecipes([], [], ["123"]);

    expect(response).toEqual(["123"]);
  });

  it("returns the overlapping elements from the recipesByArea and recipesByCategory array if recipesByIngredient is the only empty array", () => {
    const response = filterRecipes(["123", "456"], ["123"], []);

    expect(response).toEqual(["123"]);
  });

  it("returns the overlapping elements from the recipesByArea and recipesByIngredient array if recipesByCategory is the only empty array", () => {
    const response = filterRecipes(["123", "456"], [], ["123"]);

    expect(response).toEqual(["123"]);
  });

  it("returns the overlapping elements from the recipesByCategory and recipesByIngredient array if recipesByArea is the only empty array", () => {
    const response = filterRecipes([], ["123", "456"], ["123"]);

    expect(response).toEqual(["123"]);
  });

  it("returns the overlapping elements from all three arrays if none are empty", () => {
    const response = filterRecipes(
      ["456"],
      ["123", "456", "789"],
      ["123", "456"]
    );

    expect(response).toEqual(["456"]);
  });
});

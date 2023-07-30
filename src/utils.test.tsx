import { recipe } from "./data";
import { fromatCookingTime, parseRecipe } from "./utils";

describe("fromatCookingTime", () => {
  it("is exported from utils", () => {
    expect(fromatCookingTime).toBeDefined();
  });

  it("returns a time in minutes if time is less than 60", () => {
    const response = fromatCookingTime(5);

    expect(response).toBe("5 minutes");
  });

  it("returns a time as hour and minutes if time is between 60 and 120", () => {
    const response = fromatCookingTime(119);

    expect(response).toBe("1 hour 59 minutes");
  });

  it("returns a time as hours if time is greater than 120", () => {
    const response = fromatCookingTime(125);

    expect(response).toBe("2 hours 5 minutes");
  });
});

describe("parseRecipe", () => {
  it("is exported from utils", () => {
    expect(parseRecipe).toBeDefined();
  });

  it("parses the recipe as expected", () => {
    const response = parseRecipe(recipe);

    expect(response).toBe(
      "Prawn & Fennel Bisque\nCooking Time: 1 hour 15 minutes\nIngredient Count: 12\nMeal Type: Side\nPlace of Origin: French\nTags:\nIngredients:\n• 450g Tiger Prawns\n• 4 tbs Olive Oil\n• 1 large Onion\n• 1 large Fennel\n• 2 chopped Carrots\n• 150ml Dry White Wine\n• 1 tbs Brandy\n• 400g Chopped Tomatoes\n• 1L Fish Stock\n• 2 pinches Paprika\n• 150ml Double Cream\n• 8 Prawns\nMethod:\n- Shell the prawns, then fry the shells in the oil in a large pan for about 5 mins. \n- Add the onion, fennel and carrots and cook for about 10 mins until the veg start to soften. \n- Pour in the wine and brandy, bubble hard for about 1 min to drive off the alcohol, then add the tomatoes, stock and paprika. \n- Cover and simmer for 30 mins. \n- Meanwhile, chop the prawns.\r\nBlitz the soup as finely as you can with a stick blender or food processor, then press through a sieve into a bowl. \n- Spend a bit of time really working the mixture through the sieve as this will give the soup its velvety texture.\r\nTip back into a clean pan, add the prawns and cook for 10 mins, then blitz again until smooth. \n- You can make and chill this a day ahead or freeze it for 1 month. \n- Thaw ovenight in the fridge. \n- To serve, gently reheat in a pan with the cream. \n- If garnishing, cook the 8 prawns in a little butter. \n- Spoon into small bowls and top with the prawns and snipped fennel fronds.\nYoutube Tutorial: https://www.youtube.com/watch?v=4thpMbDakgM\nRecipe Source: https://www.bbcgoodfood.com/recipes/71600/prawn-and-fennel-bisque"
    );
  });
});

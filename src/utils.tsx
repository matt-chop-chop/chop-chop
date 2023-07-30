export const fromatCookingTime = (time: number): string => {
  if (time < 60) return `${time} minutes`;

  if (time < 120) return `${Math.floor(time / 60)} hour ${time % 60} minutes`;

  return `${Math.floor(time / 60)} hours ${time % 60} minutes`;
};

export const parseRecipe = (recipe: Recipe): string => {
  let response =
    recipe.name +
    "\n" +
    `Cooking Time: ${fromatCookingTime(recipe.time)}` +
    "\n" +
    `Ingredient Count: ${recipe.ingredientCount}` +
    "\n" +
    `Meal Type: ${recipe.category}` +
    "\n" +
    `Place of Origin: ${recipe.area}` +
    "\n" +
    "Tags:";
  recipe.tags.map((tag) => response + " " + tag);
  response += "\n" + "Ingredients:";
  recipe.ingredients.map(
    (ingredient) =>
      (response += "\n" + `• ${ingredient.measurement} ${ingredient.name}`)
  );
  response += "\n" + "Method:";
  recipe.instructions.map(
    (instruction) => (response += "\n" + `- ${instruction}`)
  );
  response +=
    "\n" +
    `Youtube Tutorial: ${recipe.youtube}` +
    "\n" +
    `Recipe Source: ${recipe.source}`;
  return response;
};

export const download = (recipe: Recipe) => {
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(parseRecipe(recipe))
  );
  link.setAttribute("download", `${recipe.name}.txt`);

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

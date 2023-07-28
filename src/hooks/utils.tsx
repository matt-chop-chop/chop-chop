export const getReactQueryError = (error?: unknown): Error | undefined => {
  if (!error) return;

  if (error instanceof Error) return error;

  if (typeof error === "string") return new Error(error);

  return new Error(`${error}`);
};

const getSeconds = (instructions: string): number => {
  const secondRegEx =
    "[0-9]+(?=sec)|[0-9]+(?= sec)|[0-9]+(?=second)|[0-9]+(?= second)|[0-9]+(?=secs)|[0-9]+(?= secs)|[0-9]+(?=seconds)|[0-9]+(?= seconds)";
  const matches = instructions.match(new RegExp(secondRegEx, "g"));
  const matchesAsNumbers = matches?.map((match) => parseInt(match)) || [];
  const sum = matchesAsNumbers.reduce((a, b) => a + b, 0);
  return sum;
};

const getMinutes = (instructions: string): number => {
  const minuteRegEx =
    "[0-9]+(?=min)|[0-9]+(?= min)|[0-9]+(?=minute)|[0-9]+(?= minute)|[0-9]+(?=mins)|[0-9]+(?= mins)|[0-9]+(?=minutes)|[0-9]+(?= minutes)";
  const matches = instructions.match(new RegExp(minuteRegEx, "g"));
  const matchesAsNumbers = matches?.map((match) => parseInt(match)) || [];
  const sum = matchesAsNumbers.reduce((a, b) => a + b, 0);
  return sum * 60;
};

const getHours = (instructions: string): number => {
  const hourRegEx =
    "[0-9]+(?=hr)|[0-9]+(?= hr)|[0-9]+(?=hour)|[0-9]+(?= hour)|[0-9]+(?=hrs)|[0-9]+(?= hrs)|[0-9]+(?=hours)|[0-9]+(?= hours)";
  const matches = instructions.match(new RegExp(hourRegEx, "g"));
  const matchesAsNumbers = matches?.map((match) => parseInt(match)) || [];
  const sum = matchesAsNumbers.reduce((a, b) => a + b, 0);
  return sum * 3600;
};

const parseCookingTime = (instructions: string): number => {
  const _instructions = instructions.toLocaleLowerCase();

  const timeAsSeconds =
    getSeconds(_instructions) +
    getMinutes(instructions) +
    getHours(_instructions);
  const timeAsMinutes = timeAsSeconds / 60;
  const roundedTimeAsMinutes = Math.ceil(timeAsMinutes / 5) * 5;
  return roundedTimeAsMinutes;
};

const parseIngredients = (apiRecipe: ApiRecipe): Ingredient[] => {
  const ingredientKeys = Object.keys(apiRecipe).filter((key) =>
    key.includes("strIngredient")
  );

  const measurementKeys = Object.keys(apiRecipe).filter((key) =>
    key.includes("strMeasure")
  );

  const _ingredients = ingredientKeys.map((key, index) => {
    return {
      name: apiRecipe[key as keyof ApiRecipe] || "",
      measurement: apiRecipe[measurementKeys[index] as keyof ApiRecipe] || "",
    };
  });

  const ingredients = _ingredients.filter(
    (ingredient) => ingredient.name !== ""
  );

  return ingredients;
};

export const convertApiRecipeToRecipe = (apiRecipe: ApiRecipe): Recipe => {
  const ingredients = parseIngredients(apiRecipe);
  const tags = apiRecipe?.strTags ? apiRecipe.strTags.split(",") : [];

  return {
    id: apiRecipe?.idMeal || "",
    area: apiRecipe?.strArea || "",
    category: apiRecipe?.strCategory || "",
    image: apiRecipe?.strImageSource || "",
    ingredients,
    instructions: apiRecipe?.strInstructions || "",
    name: apiRecipe?.strMeal || "",
    thumbnail: apiRecipe?.strMealThumb || "",
    source: apiRecipe?.strSource || "",
    tags,
    ingredientCount: ingredients.length,
    time: parseCookingTime(apiRecipe?.strInstructions || ""),
  };
};
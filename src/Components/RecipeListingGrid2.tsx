import { Grid } from "@chakra-ui/react";
import { ErrorCard, LoadingCard, RecipeListing } from "@/Components";
import {
  useFilterByArea,
  useFilterByCategory,
  useFilterByIngredient,
} from "@/hooks";
import { useEffect, useState } from "react";

type RecipeListingGrid2Props = {
  category: string;
  ingredient: string;
  area: string;
};

const RecipeListingGrid2 = ({
  ingredient,
  category,
  area,
}: RecipeListingGrid2Props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const {
    recipes: recipesByArea,
    loading: loadingArea,
    error: errorArea,
  } = useFilterByArea(area);
  const {
    recipes: recipesByCategory,
    loading: loadingCategory,
    error: errorCategory,
  } = useFilterByCategory(category);
  const {
    recipes: recipesByIngredient,
    loading: loadingIngredient,
    error: errorIngredient,
  } = useFilterByIngredient(ingredient);

  if (loadingArea || loadingCategory || loadingIngredient) {
    return <LoadingCard />;
  }

  if (errorIngredient) {
    return <ErrorCard error={errorIngredient} />;
  }

  if (errorCategory) {
    return <ErrorCard error={errorCategory} />;
  }

  if (errorArea) {
    return <ErrorCard error={errorArea} />;
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    setRecipes([]);
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    setRecipes(recipesByArea);
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length === 0
  ) {
    setRecipes(recipesByCategory);
  }

  if (
    recipesByArea.length === 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length > 0
  ) {
    setRecipes(recipesByIngredient);
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length === 0
  ) {
    setRecipes(recipesByArea);
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length > 0 &&
    recipesByIngredient.length === 0
  ) {
    setRecipes(recipesByArea.filter((x) => recipesByCategory.includes(x)));
  }

  if (
    recipesByArea.length > 0 &&
    recipesByCategory.length === 0 &&
    recipesByIngredient.length > 0
  ) {
    setRecipes(recipesByArea.filter((x) => recipesByIngredient.includes(x)));
  }

  // if (
  //   recipesByArea.length === 0 &&
  //   recipesByCategory.length > 0 &&
  //   recipesByIngredient.length > 0
  // ) {
  //   setRecipes(
  //     recipesByCategory.filter((x) => recipesByIngredient.includes(x))
  //   );
  // }

  // if (
  //   recipesByArea.length > 0 &&
  //   recipesByCategory.length > 0 &&
  //   recipesByIngredient.length > 0
  // ) {
  //   const recipesByAreaAndCategory = recipesByArea.filter((x) =>
  //     recipesByCategory.includes(x)
  //   );
  //   setRecipes(
  //     recipesByAreaAndCategory.filter((x) => recipesByIngredient.includes(x))
  //   );
  // }

  return (
    <Grid
      columnGap={[0, 8, 6]}
      gridAutoRows="1fr"
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      mt={[6, 8, 8]}
      rowGap={[6, 8, 8]}
    >
      {recipes.map((recipe: Recipe, index: number) => (
        <RecipeListing key={index} recipe={recipe} />
      ))}
    </Grid>
  );
};
export default RecipeListingGrid2;

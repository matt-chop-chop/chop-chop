import { Grid } from "@chakra-ui/react";
import { ErrorCard, LoadingCard, RecipeListing } from "@/Components";
import {
  useFilterByArea,
  useFilterByCategory,
  useFilterByIngredient,
} from "@/hooks";
import { useEffect, useState } from "react";
import RecipeListingId from "./RecipeListingId";

type RecipeListingGrid2Props = {
  recipes: string[];
  loading: boolean;
};

const RecipeListingGrid2 = ({ recipes, loading }: RecipeListingGrid2Props) => {
  // if (loading) {
  //   return <LoadingCard />;
  // }

  // if (errorIngredient) {
  //   return <ErrorCard error={errorIngredient} />;
  // }

  // if (errorCategory) {
  //   return <ErrorCard error={errorCategory} />;
  // }

  // if (errorArea) {
  //   return <ErrorCard error={errorArea} />;
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
      {recipes.map((recipe: string, index: number) => (
        <RecipeListingId key={index} id={recipe} />
      ))}
    </Grid>
  );
};
export default RecipeListingGrid2;

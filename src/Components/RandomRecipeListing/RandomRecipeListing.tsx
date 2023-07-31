import { useRandomRecipe } from "@/hooks";
import { ErrorCard, LoadingCard, RecipeListing } from "@/Components";
import React from "react";

export type RandomRecipeListingProps = {
  listingIndex?: number;
};

const RandomRecipeListing = ({
  listingIndex = 0,
}: RandomRecipeListingProps) => {
  const { recipe, loading, error } = useRandomRecipe(listingIndex);

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!recipe) {
    return <ErrorCard error={new Error("Recipe could not be found")} />;
  }

  return <RecipeListing recipe={recipe} />;
};

export default RandomRecipeListing;
